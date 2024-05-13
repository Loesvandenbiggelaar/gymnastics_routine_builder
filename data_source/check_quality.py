from data_functions import loadJson, loadConfig
import argparse

# add command line argument for verbose
parser = argparse.ArgumentParser(description='Gymnastics Routine Builder')
parser.add_argument('--verbose', action='store_true', help='verbose')
args = parser.parse_args()


verbose = args.verbose

# load the counted elements.
# this is manually 
element_counts = loadConfig("data_source/nr_elements_check.yaml")
percentages = {}
for mens_womens in ["men", "women"]:
    if verbose:
        print(mens_womens)
    percentages[mens_womens] = {}
    for language in ["nl", "en", "es", "fr"]:        
        try:
            elements = loadJson(f"_app/src/lib/data/elements/{mens_womens}/{language}_elements.json")
        except FileNotFoundError:
            continue
        if verbose:
            print(f"\t {language}:")
        percentages[mens_womens][language] = []
        image_metadata = loadJson(f"_app/src/lib/data/elements/{mens_womens}/images/metadata.json")

        for apparatus, items in elements.items():
            len_items = len(items)
            counted_items = element_counts[mens_womens][apparatus]
            diff = abs(len_items - counted_items)
            percentages[mens_womens][language].append(1-diff/counted_items)
            if verbose:
                print(f"\t\t {apparatus}: {len_items}/{counted_items}")
            symbols = set()
            element_images = set()
            for image in image_metadata[apparatus]:
                try:
                    id = image["element"]
                except KeyError:
                    continue
                if image["type"] == "symbol":
                    symbols.add(image["element"])
                elif image["type"] == "element":
                    element_images.add(image["element"])
            if verbose:
                print(f"\t\t\tfound images: {len(set(items.keys())&element_images)}/{len(items)}")
                print(f"\t\t\tfound symbols: {len(set(items.keys())&symbols)}/{len(items)}")
                print()


for mens_womens, language_data in percentages.items():
    print(f"{mens_womens}:")
    for language, data in language_data.items():
        avg = round(sum(data) / len(data)*100, 0)
        print(f"\t{language}: {avg}% accuracy")