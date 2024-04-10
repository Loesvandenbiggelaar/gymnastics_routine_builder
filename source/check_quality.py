from functions import loadJson, loadConfig

element_counts = loadConfig("source/nr_elements_check.yaml")

gender = "men"
language = "en"

elements = loadJson(f"data/elements/{gender}/{language}_elements.json")

for apparatus, items in elements.items():
    print(apparatus, len(items))
