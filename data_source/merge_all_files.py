# This script merges all the JSON files in the specified directory into a single JSON file.
# the script combines women and men into one category, not distinguishing between them. only the apparatus names are of value.
# first key should be the language key, the second key should be the apparatus name, and the value should be the list of elements.
import json
import os
from extract_elements import loadJson


# translate the apparatus names to a code universally understood by the app
# two codes for men and women
apparatus_codes = {
    "men": {
        "floor": "f_m",
        "pommel horse": "ph",
        "rings": "r",
        "vault": "v_m",
        "parallel bars": "pb",
        "high bar": "hb"
    },
    "women": {
        "vault": "v_w",
        "uneven bars": "ub",
        "beam": "b",
        "floor": "f_w"
    }
}

def get_files(directory):
    """
    Get all the JSON files in the specified directory.

    Args:
        directory (str): The directory path to search for JSON files.

    Returns:
        list: A list of JSON file names found in the directory.
    """
    # get all the files in the directory
    all_files = os.listdir(directory)
    # filter out non-json files
    json_files = [file for file in all_files if file.endswith('.json')]
    return json_files

directory = "_app/src/lib/data/elements/"
concatenated_json = {}
# load data for men and women
for sex in ["men", "women"]:
    # get all the JSON files in the directory
    json_files = get_files(directory + sex + "/")

    # loop over the files to load them
    for file in json_files:
        # get the language
        language = file.split('_')[0]

        # load the json file
        data = loadJson(directory + sex + "/" + file)

        if language not in concatenated_json:
            concatenated_json[language] = {}

        for apparatus, elements in data.items():
            # tranlate the appartus name to a code
            apparatus_code = apparatus_codes[sex][apparatus.lower()]
            # if apparatus_code not in concatenated_json[language]:
            #     concatenated_json[language][apparatus_code] = {}

            
            concatenated_json[language][apparatus_code] = list(elements.values())

# for language, apparatuses in concatenated_json.items():
#     print("language supported:", language)
#     for apparatus in apparatuses:
#         print(apparatus)
        
# save the json as a typescript file
# also add the types of the json to the file
# start with the type of the element and the type and structure of the data
# we need to define which field is a string, or a int for example
# e.g. type elementType = {id:string, description:string} etc
with open("_app/src/lib/data/elements/all_elements.ts", "w") as file:
    # the types in the elementType should be gereated dynamically
    # we can loop over the first element in the concatenated_json and get the keys
    # then we can loop over the keys and get the type of the value
    # we can then write the type to the file
    elementType = concatenated_json["en"]["f_m"][0]
    file.write("export type ElementType = {")
    for key, value in elementType.items():
        if isinstance(value, str):
            file.write(key + ":string, ")
        elif isinstance(value, int):
            file.write(key + ":number, ")
        elif isinstance(value, float):
            file.write(key + ":number, ")
        else:
            if key == "images":
                file.write(key + ":ImageType, ")
            else:
                raise ValueError("Unknown type", key, type(value))
    file.write("};\n")

    # write the type for the images dynamically
    file.write("export type ImageType = {")
    for key, value in elementType["images"].items():
        if isinstance(value, str):
            file.write(key + ":string, ")
        elif isinstance(value, int):
            file.write(key + ":number, ")
        elif isinstance(value, float):
            file.write(key + ":number, ")
        else:
            file.write(key + ":any, "	)
    file.write("};\n")
    # write the type for the apparatus
    file.write("export type ApparatusType = Record<string, ElementType[]>;\n")
    # write the type for the language
    file.write("export type LanguageType = Record<string, ApparatusType>;\n")
    file.write("export const allElements: LanguageType = ")
    file.write(json.dumps(concatenated_json, indent=4))
    file.write(";")
