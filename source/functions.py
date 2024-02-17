import yaml
import json

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

        