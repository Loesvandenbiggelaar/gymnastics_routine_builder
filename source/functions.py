import yaml
import json
import fitz

def loadConfig(file):
    """
    Load the config file, which is in YAML format.
    file: The YAML file to read
    """
    assert file.endswith(".yaml")
    print("Loading config file")
    with open(file, "r") as f:
        return yaml.safe_load(f)

def loadJson(file):
    assert file.endswith(".json")
    with open(file, "r") as f:
        return json.load(f)

def saveJson(file, elements):
    assert file.endswith(".json")
    with open(file, "w") as f:
        f.write(json.dumps(elements))

def loadPages(file, page_range):
    pdf = fitz.open(file)
        # Check if the target page is within the range of pages
    # Select the given target pages
    if isinstance(page_range, int):
        if page_range < 0 or page_range >= len(pdf):
            print("Error: Invalid target page number.")
            return
        pages = [page_range]
    elif isinstance(page_range, list):
        pages = range(page_range[0], page_range[1]+1)
    else:
        raise ValueError ("target_page not valid")
    print("page range:", pages)
    return [pdf.load_page(i -1) for i in pages]


def adjustString(s, adjustments):
    """Do string replacements listed in the config file."""

    for adj in adjustments:
        s = s.replace(adj[0], adj[1])
    return s

def cleanText(string):
    return string.replace("|", " ").replace("\t", " ").replace("\n", "").replace("  ", " ").strip()