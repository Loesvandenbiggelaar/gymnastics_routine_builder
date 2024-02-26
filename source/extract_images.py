
import fitz
import os
import shutil
import re
from functions import loadConfig

def writeImage(page, image_path, image_bytes, count=1):
    if count == 1:
        image_path = image_path.replace(".png", f"_{count}.png")
    else:
        image_path = re.sub(r"(\d*?).png", str(count)+".png", image_path)
    if os.path.exists(image_path):
        writeImage(page, image_path, image_bytes, count+1)
    else:
        print("write image", image_path)
        # with open(image_path, "wb") as image_file:
        #     image_file.write(image_bytes)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), clip=page.get_image_bbox(image_bytes[7]))
        pix.save(image_path)


def getPageLayout(page):
    """
    Based on the length of the x and y we can define whether the pages is in landscape or portrait mode.
    """ 
    bbox = page.bleedbox
    if bbox.x1-bbox.y1 < 0:
        return "portrait"
    else:
        return "landscape"


def findText(page, image, found_text, page_layout):
    found = ""
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
            diff = round(bbox_image.y0 - round(text_y1))
            if diff < 0:
                continue
            if diff < 15:
                # In this case the number is too close to the picture and it is assumed its a number from the points; e.g. "3.20 P." instead of element 3.20
                continue
            if diff == closestx:
                optionA.append(item)
                closestx = diff
            elif diff < closestx:
                optionA = [item]
                closestx = diff
            for option in optionA:
                if bbox_image.x0 < text_x1 < bbox_image.x1:
                    found = option
                    # print(found)
                    pass
    return found
def extract_text_and_images(pdf_path, output_folder, target_page):
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Open the PDF file
    pdf_document = fitz.open(pdf_path)
    
    # Check if the target page is within the range of pages
    if isinstance(target_page, int):
        if target_page < 0 or target_page >= len(pdf_document):
            print("Error: Invalid target page number.")
            return
        pages = [target_page]
    elif isinstance(target_page, list):
        pages = range(target_page[0], target_page[1]+1)
    else:
        raise ValueError ("target_page not valid")
    for target in pages:
        page = pdf_document.load_page(target)
        page_layout = getPageLayout(page)

        # Extract text from the page
        page_text = page.get_text()
        regex_pattern = re.compile(r"(\d+\.\d+)\s+\n+(?!P\.)")
        found_text = re.findall(regex_pattern, page_text)
        
        # Extract images and their positions
        images = page.get_images(full=True)
        
        # Loop through images on the page
        for img_info in images:
            xref = img_info[0]
            base_image = pdf_document.extract_image(xref)
            image_bytes = base_image["image"]

            # Get the text closest and above the image
            bbox_image = page.get_image_bbox(img_info[7])

            # all the judges symbols are also images.
            # These have a smaller format. a size of < 75 will be assumed to be such a symbol.
            if (bbox_image.bottom_right - bbox_image.top_left)[0] < 75:
                # print("assuming", img_info[7], "is a judge symbol")
                continue


            found = ""
            found = findText(page, img_info, found_text, page_layout)
            # print("found", found)
            if found == "":
                found = findText(page, img_info, found_text, "other")

            if found != "":
                image_path = os.path.join(output_folder, f"page{target}_element_{found}.png")
                
                writeImage(page, image_path, img_info)
            else:
                print("warning! could not process ", img_info[7])
                unprocessed_path = os.path.join( output_folder,"unprocessed/")
                print("exists", os.path.exists(output_folder))
                if not os.path.exists(unprocessed_path):
                    os.makedirs(unprocessed_path, 511)
                    print('made directory')
                image_path = unprocessed_path + f"page{target}_{img_info[7]}.png"
                writeImage(page, image_path, img_info)
                print("saved unprocessed image to", image_path)
                # assert 1 == 2

    pdf_document.close()


def main():
     # Example usage
    config = loadConfig("source/pages_config.yaml")
    apparatus = "floor"
    output_folder = "data/images/" + apparatus + "/"
    if os.path.exists(output_folder):
        shutil.rmtree(output_folder)
    # os.makedirs(output_folder, 511)
    print("doing", output_folder)
    # target_page = 64  # Specify the page number you want to extract text and images from
    target_pages = [config["apparatuses"][apparatus]["start page"]["en"], config["apparatuses"][apparatus]["end page"]["en"]]  # Specify the page number you want to extract text and images from
    print(target_pages)
    extract_text_and_images(config["file"]["en"], output_folder, target_pages)



if __name__ == main():
    main()
   