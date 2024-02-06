from tabula.io import read_pdf
import re
import yaml

def loadTables(file, pages):
    """
    Load all the elements from specific pages. for each page a new pandas dataframe is created.

    file: PDF input file
    pages: page numbers from the PDF to read. 
    """
    print("reading pages",pages, "from", file)
    
    return read_pdf(file, pages=pages, pandas_options={"header": None})


def main():
    file = "NTS-Elemententabel-2022-2024-deel-4-versie-01-07-22.pdf"
    df = loadTables(file, 1)
    print(df)

if __name__ == main():
    main()