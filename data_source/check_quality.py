from source.extract_elements import loadJson, loadConfig

element_counts = loadConfig("source/nr_elements_check.yaml")

gender = "men"
language = "nl"

elements = loadJson(f"src/lib/data/elements/{gender}/{language}_elements.json")

for apparatus, items in elements.items():
    print(apparatus, len(items),element_counts[gender][apparatus])
