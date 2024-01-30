import PyPDF2
import re
import yaml


def loadConfig(file):
    """
    Load the config file, which is in YAML format.

    file: The YAML file to read
    """
    with open(file, 'r') as f:
        y =yaml.safe_load(f)
    return y

def loadPages(file):
    """
    Load all the elements from specific pages. for each page a new pandas dataframe is created.

    file: PDF input file
    pages: page numbers from the PDF to read. 
    """
    
    print("reading pages of", file)    
    return PyPDF2.PdfReader(file )

def extractElements(s):
    pattern = r"(T?\d\.\d+?)\s+(?!TOEGEVOEGD?)(?!T\d\.\d+)([^\d \ ].+?)\s*(\d\.\d*)\s*P"
    return re.findall(pattern, s)

def findGroup(s):
    pattern = r"(GROEP\s+\d?)"
    return re.findall(pattern, s)[0]

def writeResult(file, elements):
    with open(file, "w", encoding='utf-8') as f:
        f.write("number\tdescription\tvalue\tgroup\n")
        for element in elements:
            f.write("\t".join([e if e != None else ' ' for e in element]).replace("\r", " ") +"\n")


def main():
    file = "pages_config.yaml"
    config = loadConfig(file)
    reader = loadPages(config["FIG"])
    
    # List of all possible difficulty of an element. Impossible is a work around to avoid Index errors :s
    difficulty = ["A", "B", "C", "D", "E", "F/G", "impossible"]

    for apparatus in config["apparatuses"]:
        print("Processing", apparatus)
        elements = []
        pages = reader.pages[config["pages"][apparatus]["start"]:config["pages"][apparatus]["end"]]
        for page in pages:
            text = page.extract_text().replace("\n", "")
            elements_page = extractElements(text)
            group = findGroup(text)

            for element in elements_page:
                elements += [list(element) + [group]]
            # elements_page = [list(element) + [group] for element in elements_page]

        writeResult(config["output_directory"] + apparatus + ".tsv", elements)
        break
if __name__ == main():
    main()