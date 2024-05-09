# load ts file with all the data
import json
from extract_elements import saveJson



def transform_ts_to_json(file):

    with open(file, 'r') as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            if "allElements" in line:
                start = i + 1
                # print(i, line)
            if "};" in line:
                end = i
                # print(i, line)
        json_string = "{" + "\n".join(lines[start:end])+ "}"

    # parse the string presentation of the json to an actual json
    return json.loads(json_string)

file = "_app/src/lib/data/elements/all_elements.ts"
data = transform_ts_to_json(file)

# loop over all the elements per language and per apparatus.
# count each word and store it in a dictionary
# we can use the Counter class from the collections module
# we can use the split method on the description to get the words
# we can use the lower method to make the words lowercase
# we can use the update method of the Counter to add the words to the dictionary
from collections import Counter

# list of words that should not be used
blacklist = ["with", "met", "also","grip","both", "vanaf", "afzet", "approach", "from", "other","together", "avec", "between", "naar", "aussi", "vanuit", "voor", "door", "terugkomen","keuze", "over" ]

# default dict
count_data = {}
for language, language_data in data.items():
    count_data[language] = {}
    for apparatus, elements in language_data.items():
        count_data[language][apparatus] = Counter()
        for element in elements:
            words = element["description"].replace(")","").replace("(", "").replace(".", "").lower().replace("hdst", "handstand").split(" ")

            # add the words to the counter
            word_counter = Counter(words)
            count_data[language][apparatus].update(word_counter)
        # break
        filtered = {}
        for key, value in count_data[language][apparatus].items():
            if len(key) < 4:
                continue
            if value < 11:
                continue
            if key in blacklist:
                continue
            filtered[key] = value

        count_data[language][apparatus] = dict(sorted(filtered.items(), key=lambda item: item[1], reverse=True))

# I don't need the count of the words, I only need the words
# I can use the keys method of the Counter to get the words
converted = {}
for lang, lang_data in count_data.items():
    converted[lang] = {}
    for app, app_data in lang_data.items():
        converted[lang][app] = list(app_data.keys())

# for lang, lang_data in count_data()
# save the count_data as a typescript file. all languages and apparatuses should be in the file
with open("_app/src/lib/data/elements/search_tags.ts", "w") as f:
    f.write("export const search_tags = ")
    f.write(json.dumps(converted, indent=2))
    f.write(";") 