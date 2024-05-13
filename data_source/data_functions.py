import json
import yaml

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
    print('write json to', file)
    assert file.endswith(".json")
    with open(file, "w") as f:
        f.write(json.dumps(elements))

def data_ts_to_json(file):
    """
    Load the data from a ts file and convert it to a JSON object.
    file: The ts file to read
    """
    with open(file, 'r') as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            if "allElements" in line:
                start = i + 1
            if "};" in line:
                end = i
        json_string = "{" + "\n".join(lines[start:end])+ "}"

    return json.loads(json_string)

def cleanText(s:str) -> str:
    return s.replace("|", " ").replace("\u2013","-").replace("\t", " ").replace("\n", "").replace("  ", " ").strip(" ")

def adjustString(s:str, adjustments) -> str:
    """Do string replacements listed in the config file."""

    for adj in adjustments:
        s = s.replace(adj[0], adj[1])
    return s