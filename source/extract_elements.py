from tabula.io import read_pdf
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

def loadTables(file, pages):
    """
    Load all the elements from specific pages. for each page a new pandas dataframe is created.

    file: PDF input file
    pages: page numbers from the PDF to read. 
    """
    print("reading pages",pages, "from", file)
    
    return read_pdf(file, pages=pages, pandas_options={"header": None})

def extract_items(s, vault=False):
    """
    Based on a string input, extract the element number, description and optionally (for vault) the D score.
    The D score of non-vault apparatuses is always 0 in this stage.

    s: string input
    output: list with 3 values. 1) element number, 2) description and 3) D score. output can be None
    """
    
    if vault:
        pattern = r'^(\w?\d\.\d*)\s(.*?)\s*(\d\.\d*)'
    else:
        pattern = r'^(\w?\d\.\d*)\s(.*)'

    match = re.match(pattern, s)
    number = None
    description = None
    d = None
    if match:
        number = match.group(1)
        description= match.group(2)
        if vault:
            d = match.group(3)
    return [number, description, d]

def vault_adjust_table(table):
    """
    I need to mess with the table from vault because the PDF reader is not optimal. 
    The conclusion is that some columns should be merged.
    """
    table_adjusted = table.copy()
    for index, item in enumerate(table.iloc[0,:]):
        if isinstance(item, float):
            for index2, i in enumerate(table[index]):
                if isinstance(i, str):
                    table_adjusted.iloc[index2, index-1] = i
    return table_adjusted

# TODO string joining etc. should be another function (e.g. prepareWrite or processSomething). 
# this function should only write.
def writeResult(file, elements):
    with open(file, "w", encoding='utf-8') as f:
        for element in elements:
            f.write("\t".join([e if e != None else '' for e in element]).replace("\r", " ") +"\n")


def main():
    file = "pages_config.yaml"
    config = loadConfig(file)
    
    # List of all possible values of an element. Impossible is a work around to avoid Index errors :s
    values = ["A", "B", "C", "D", "E", "F/G", "impossible"]


    for apparatus in config["apparatuses"]:
        print("Processing", apparatus)
        elements = []

        tables = loadTables(config["FIG"], config["pages"][apparatus])
        for page_df in tables:
            valuesStart = 0
            df_adjusted = page_df.copy()
            if apparatus == "vault":
                df_adjusted = vault_adjust_table(df_adjusted)

            # start the messy bit
            # TODO: split up into more functions
            for column in df_adjusted.columns:
                elementsFound = False
                columntolist = df_adjusted[column].tolist()
                stripped_col = [p for p in columntolist if isinstance(p, str)]
                starts = []
                value = values[valuesStart]
                for index,item in enumerate(stripped_col):
                    try:
                        if re.match(r"^(\w?\d\.\d*)", item) and not re.match(r"^(\w?\d\.\d*) P.", item):
                            starts.append(index)
                    except ValueError:
                        pass
                for i, item in enumerate(starts):
                    try:
                        s=" ".join(stripped_col[starts[i]: starts[i+1]])
                    except IndexError:
                        s=" ".join(stripped_col[starts[i]: len(stripped_col)])
                    res = extract_items(s=s)
                    if res != [None, None, None]:
                        elementsFound = True
                        elements += [res + [value]]
                if elementsFound:
                    valuesStart +=1
        
        writeResult(config["output_directory"] + apparatus + ".tsv", elements)
if __name__ == main():
    main()