
import fitz
import os
import shutil
import re
import pandas as pd
from data_functions import loadConfig, saveJson, loadJson
import argparse

class PageClass:
    def __init__(self, page):
        self.page = page
        # self.metadata = metadata
        self.layout = self.getLayout()
        self.text = self.page.get_text()
    
    def extractGroup(self, regex_pattern):
        """
        Extract the group of the page. 
        """
        dict_translate_nr = {"I":"1", "II":"2", "III":"3", "IV": "4"}
        number = None
        # define the regex to extract the group nr and group description from each page
        for res in re.findall(regex_pattern, self.text):
            number = dict_translate_nr.get(res[0], res[0].split(".")[0])

        return number
    
    def getLayout(self):
        """
        Based on the length of the x and y we can define whether the pages is in landscape or portrait mode.
        """ 
        bbox = self.page.bleedbox
        if bbox.x1-bbox.y1 < 0:
            return "portrait"
        else:
            return "landscape"


def writeImage(page, image_metadata):
    clip = fitz.Rect(image_metadata["bbox"]["x0"],image_metadata["bbox"]["y0"],image_metadata["bbox"]["x1"],image_metadata["bbox"]["y1"],)
    pix =  page.get_pixmap(matrix=fitz.Matrix(2, 2), clip=clip)
    pix.save(image_metadata["filename"])
    return
def getImageName(image_path, count=1):
    if count == 1:
        image_path = image_path.replace(".png", f"_{count}.png")
    else:
        image_path = re.sub(r"(\d*?).png", str(count)+".png", image_path)
    if os.path.exists(image_path):
        return getImageName(image_path, count+1)
    else:
        return image_path

def findText(page, image, found_text, page_layout):
    found = []
    optionA = []
    closestx = 1e6
    bbox_image = page.get_image_bbox(image[7])
    for item in found_text:
        for field in page.search_for(item):
            # some pages have a portrait mode, other landscape mode. 
            # This is important when matching the text with images. 
            # if the page is in portrait mode, we need to do a new calculation to make sure the matching works.
            if page_layout == "portrait":
                text_y1 = field.x1
                text_x1 = abs(field.y0 - page.bleedbox.y1)
            elif page_layout == "landscape":
                text_y1 = field.y1
                text_x1 = field.x1
            elif page_layout == "other":
                text_y1 = field.y1
                text_x1 = abs(field.x1 - page.bleedbox.y1)
            diff = round(bbox_image.y0 - round(text_y1 /10)* 10)
            if diff < 0:
                continue
            if diff < 10:
                # In this case the number is too close to the picture and it is assumed its a number from the points; e.g. "3.20 P." instead of element 3.20
                continue
            if diff == closestx:
                optionA.append([item, text_x1])
                closestx = diff
            elif diff < closestx:
                optionA = [[item, text_x1]]
                closestx = diff
    
    
    for option, text_x1 in optionA:
        if bbox_image.x0 - 35 < text_x1 < bbox_image.x1 + 25:
            found.append(option)
            # print(found)
    distance = 800
    for option, text_x1 in optionA:
        # print(option, bbox_image.x1 - text_x1 , distance)
        if 0 < bbox_image.x1 - text_x1 < distance:
            distance = bbox_image.x1 - text_x1
            found = [option]

    # print("found", found[0])
    if len(found) > 1:
        print(f"found more than one option for {image[7]}: {found}")
        found = []

    return "".join(found)

def combineImages(page, metadata):
    newImages = []
    print(page)
    for x in pd.DataFrame(metadata).groupby("element").agg(list).iterrows():
        if len(x[1]["img_id"]) == 1:
            continue

        # The assumption is that if the x0 and x1 (left and right border) are equal, the images are scattered and should be combined.
        # If the x0 and x1 are not equal, separate images are assumed
        if len(set([bbox["x0"] for bbox in x[1]["bbox"]])) != 1:
            continue
        if len(set([bbox["x1"] for bbox in x[1]["bbox"]])) != 1:
            continue

        img_info = {}
        # assert len(set(x[1]["page"])) == 1
        newBbox = {"x0": 0, "y0":0, "x1":0, "y1":0}
        for bbox in x[1]["bbox"]:
            # print("bbox", bbox)
            for axis, value in bbox.items():
                # init
                if newBbox[axis] == 0:
                    newBbox[axis] = value
                else:
                    # get the outer boundaries combined
                    if axis == "y0":
                        if newBbox[axis] > value:
                            newBbox[axis] = value
                    elif axis == "y1":
                        if newBbox[axis] < value:
                            newBbox[axis] = value
        
        img_info["element"] = x[0]
        img_info["bbox"] = newBbox
        img_info["filename"] =x[1]["filename"][0].split("element")[0]+ f"element_{x[0]}_{''.join(x[1]["img_id"])}.png"
        newImages.append(img_info)
        for file in x[1]["filename"]:
            os.remove(file)
        writeImage(page,img_info)
    return newImages

def extract_text_and_images(pdf_path, output_folder, target_page, group_regex_pattern, do_group_extraction):
    metadata = []
    
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Open the PDF file
    pdf_document = fitz.open(pdf_path)
    
    # Check if the target page is within the range of pages
    # Select the given target pages
    if isinstance(target_page, int):
        if target_page < 0 or target_page >= len(pdf_document):
            print("Error: Invalid target page number.")
            return
        pages = [target_page]
    elif isinstance(target_page, list):
        pages = range(target_page[0], target_page[1])
    else:
        raise ValueError ("target_page not valid")
    
    # Loop over every target page in pages.
    # Each target page is loaded and processed.
    for target in pages:
        _page = PageClass(pdf_document.load_page(target - 1))
        page_layout = _page.layout
        group = None
        if do_group_extraction:
            group = _page.extractGroup(group_regex_pattern)
        # Extract text from the page
        regex_pattern = re.compile(r"(\d+\.\d*)\s+\n?(?!P\.)")
        found_text = re.findall(regex_pattern,  _page.text)
        
        # Extract images and their positions
        images = _page.page.get_images(full=True)
        
        # Loop through images on the page
        for img_info in images:
            metadata_img = {}
            metadata_img["img_id"] = img_info[7]
            metadata_img["page"] = target
            # Get the text closest and above the image
            bbox_image = _page.page.get_image_bbox(img_info[7])
            metadata_img["bbox"] = {"x0": bbox_image.x0, "y0":bbox_image.y0, "x1":bbox_image.x1, "y1":bbox_image.y1}
            # all the judges symbols are also images.
            # These have a smaller format. a size of < 75 will be assumed to be such a symbol.
            if (bbox_image.bottom_right - bbox_image.top_left)[0] < 75:
                metadata_img["type"] = "symbol"
            else:
                metadata_img["type"] = "element"

            found = ""
            found = findText(_page.page, img_info, found_text, page_layout)
            if found == "":
                found = findText(_page.page, img_info, found_text, "other")

            if found != "":
                if do_group_extraction:
                    metadata_img["element"] = group+"."+found.strip(".")
                else:
                    metadata_img["element"] = found

                image_path = os.path.join(output_folder, metadata_img['type'])
                if not os.path.exists(image_path):
                    os.mkdir(image_path)
                image_path = os.path.join(image_path, f"page{metadata_img['page']}_element_{metadata_img['element']}_{metadata_img['img_id']}.png")
                
                metadata_img["filename"] = image_path
                writeImage(_page.page, metadata_img)
            else:
                # The images which could not be processed are saved here. 
                # Saving the images is good for debugging/optimization purposes
                unprocessed_path = os.path.join( output_folder,"unprocessed/")
                if not os.path.exists(unprocessed_path):
                    os.makedirs(unprocessed_path, 511)
                    print('made directory', unprocessed_path)
                image_path = unprocessed_path + f"page{target}_{img_info[7]}.png"
                
                metadata_img["filename"]= getImageName(image_path)
                writeImage(_page.page, metadata_img)
                
                print("Could not process",metadata_img["img_id"],"and saved to", image_path)
            metadata.append(metadata_img)
        
        combineImages(_page.page, [m for m in metadata if m["page"]==metadata_img["page"]])

        
    pdf_document.close()
    return metadata



# add en empty dict to every element in the elements_data:
def add_empty_dict(elements_data):
    for apparatus, data in elements_data.items():
        for element, info in data.items():
            info["images"] = {"figure":[], "symbol":[]}
    return elements_data


# load the elements data and load the image metadata, then add the path to the image as a key-object to every element of the element data.
def addImagePath(elements_data, metadata):
    elements_data = add_empty_dict(elements_data)

    copy = elements_data
    for apparatus, data in metadata.items():
        for item in data:
            try:
                element = item["element"]
            except KeyError:
                continue
            _type = item["type"]

            try:
                if _type == "symbol":
                    copy[apparatus][element]["images"]["symbol"].append(item["filename"])
                else:
                    copy[apparatus][element]["images"]["figure"].append(item["filename"])
            except KeyError:
                pass
    return copy

def do_extraction(output_folder, apparatus, language, config, do_group_extraction):
    output_sub_folder = output_folder + apparatus + "/"
    # If the output folder already exists, delete it and its content.
    if os.path.exists(output_sub_folder):
        shutil.rmtree(output_sub_folder)
    target_pages = [config["apparatuses"][apparatus]["start page"][language], config["apparatuses"][apparatus]["end page"][language]]  # Specify the page number you want to extract text and images from
    return extract_text_and_images(config["file"][language], output_sub_folder, target_pages, config["apparatuses"][apparatus]["regex"]["group"][language], do_group_extraction)


def main():
    # add arguments to the command line wether or not to do the extraction of the images.
    parser = argparse.ArgumentParser(description='Gymnastics Routine Builder')
    parser.add_argument('--extract_images', action='store_true', help='Extract images from PDF')
    args = parser.parse_args()

    extract_images = args.extract_images

    if extract_images:
        print("Extracting images")

    config = loadConfig("data_source/pages_config_women.yaml")
    output_folder = config["output directory"] + "/images/"
    
    if extract_images:
        language = "en"
        json = {}
        for apparatus in ["vault", "beam", "uneven bars", "floor"]:
            json[apparatus] = do_extraction(output_folder, apparatus, language, config, False)
        saveJson(output_folder + "metadata.json", json)
    
    metadata = loadJson(output_folder + "metadata.json")
    for language in ["en", "nl"]:
        elements_data = loadJson(config["output directory"] + language + "_elements.json")
        elements_data = addImagePath(elements_data, metadata)
        saveJson(config["output directory"] + language + "_elements.json", elements_data)

    config = loadConfig("data_source/pages_config_men.yaml")
    output_folder = config["output directory"] + "/images/"
    if extract_images:
        language = "en"
        json = {}
        for apparatus in ["floor", "pommel horse", "rings", "vault", "parallel bars", "high bar"]:
            json[apparatus] = do_extraction(output_folder, apparatus, language, config, True)
        saveJson(output_folder + "metadata.json", json)
    
    metadata = loadJson(output_folder + "metadata.json")
    for language in ["en", "nl", "es", "fr"]:
        elements_data = loadJson(config["output directory"] + language + "_elements.json")
        elements_data = addImagePath(elements_data, metadata)
        saveJson(config["output directory"] + language + "_elements.json", elements_data)



if __name__ == "__main__":
    main()
   