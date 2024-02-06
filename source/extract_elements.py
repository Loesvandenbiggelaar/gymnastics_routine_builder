import PyPDF2
import re
import yaml
import json


def loadConfig(file):
    """
    Load the config file, which is in YAML format.

    file: The YAML file to read
    """
    with open(file, "r") as f:
        y = yaml.safe_load(f)
    return y


def loadPages(file):
    """
    Load all the elements from specific pages. for each page a new pandas dataframe is created.

    file: PDF input file
    pages: page numbers from the PDF to read.
    """

    print("reading pages of", file)
    return PyPDF2.PdfReader(file)


def extractElements(s, apparatus):
    if apparatus == "vault":
        pattern = (
            r"(T?\d\.\d+?)\s+(?!TOEGEVOEGD?)(?!T\d\.\d+)([^\d \ ].+?)\s*(\d\.\d*)\s*P"
        )
    elif apparatus == "uneven bars":
        pattern = (
            r"(\d+\.\d+)\s+(?!(?:Brug|\d\.\d{3,}|\s|–|-|\.|\/))(.*?)(?=\s+\d+\.\d+|$|\s{8,})"
        )
    elif apparatus == "beam":
        pattern = (
            r"(\d+\.\d+)\s+(?!(?:Balk|\d\.\d{3,}|\s|–|-|\.|\/))(.*?)(?=\s+\d+\.\d+|$|\s{8,})"
        )
    elif apparatus == "floor":
        pattern = (
            r"(\d+\.\d+)\s+(?!(?:Vloer|\d\.\d{3,}|\s|–|-|\.|\/))(.*?)(?=\s+\d+\.\d+|$|\s{4,})"
        )
    else:
        raise ValueError("apparatus name is not valid")
    return re.findall(pattern, s)


def findGroup(element):
    return element[0].split(".")[0]


def writeResult(file, elements):
    with open(file, "w", encoding="utf-8") as f:
        f.write("number\tdescription\tvalue\tgroup\tdifficulty\n")
        for element in elements:
            f.write(
                "\t".join([e if e != None else " " for e in element]).replace("\r", " ")
                + "\n"
            )

def writeGroups(file, groups):
    with open(file, "w") as f:
        json.dump(groups, f)

def addDifficulty(element):
    difficulty = ["TA", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    n = element[0].split(".")[1]
    if len(n) == 3:
        return difficulty[int(n[0])]
    elif len(n) == 4:
        return difficulty[int(n[0:2])]
    else:
        raise ValueError("No valid number")


def addValue(difficulty):
    if difficulty in ["SA", "TA", "A"]:
        return 0.1
    elif difficulty == "B":
        return 0.2
    elif difficulty == "C":
        return 0.3
    elif difficulty == "D":
        return 0.4
    elif difficulty == "E":
        return 0.5
    elif difficulty == "F":
        return 0.6
    elif difficulty == "G":
        return 0.7
    elif difficulty == "H":
        return 0.8
    elif difficulty == "I":
        return 0.9
    elif difficulty == "J":
        return 1.0
    else:
        raise ValueError("please enter a valid difficulty (in capitals).")

def getGroups(page, apparatus):
    """
    Return the number and name of the group on the given page.
    also convert a string to an integer. 
    since the pdf converter is not perfect, double spaces can be introduced which need to be corrected for.
    """
    if apparatus == "vault":
        pattern = r"GROEP\s+(\d)\s+.\s+(.*?)\s+\d\.\d{2}"
    else:
        pattern = r"(\d\.000)\s+.\s+(([A-Z\’\.\s]+(?:[A-Z]{2,}|\.)))"
    res = re.findall(pattern, page)
    assert len(res) >= 1, ("oops, something went wrong", page)
    return [int(float(res[0][0])), res[0][1].replace("  ", " ").replace(" ’", "’").replace("ME T", "MET").replace("MET /", "MET/").replace("MET/ ", "MET/").replace("FLIK -FLAK", "FLIK-FLAK").replace("LA -DRAAI", "LA-DRAAI")]


def main():
    file = "pages_config.yaml"
    config = loadConfig(file)
    reader = loadPages(config["FIG"])
    groups = {}
    for apparatus in config["apparatuses"]:
        print("Processing", apparatus)
        groups[apparatus] = {}
        elements = []
        pages = reader.pages[
            config["pages"][apparatus]["start"] : config["pages"][apparatus]["end"]
        ]
        for page in pages:
            text = page.extract_text().replace("\n", "")
            number, name= getGroups(text, apparatus)
            if number in groups[apparatus].keys():
                # this is a weird exception where they mean the same but write it differently
                if name == "HANDSTANDOVERSLAG MET/ZONDER 1/1 DRAAI IN 1E VLUCHTFASE - IN 2E VLUCHTFASE SALTO VOOR - OF ACHTEROVER MET/ZONDER LA-DRAAI":
                    continue
                assert groups[apparatus][number] == name.lower(), "whoops "


            else:                
                groups[apparatus][number] = name.lower()



            elements_page = extractElements(text, apparatus)

            for element in elements_page:
                if apparatus == "vault":
                    elements += [list(element) + [findGroup(element)] + [" "]]
                else:
                    difficulty = addDifficulty(element)
                    value = str(addValue(difficulty))
                    elements += [
                        [element[0], element[1].replace("  ", " "), value, findGroup(element),difficulty]
                    ]

        writeResult(config["output_directory"] + apparatus + ".tsv", elements)
    writeGroups(config["output_directory"] + "groups.json", groups)


if __name__ == main():
    main()
