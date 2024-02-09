import re
import PyPDF2
import yaml
from difflib import SequenceMatcher



class elementExtractor:
    def __init__(self, config, language) -> None:

        self.config = self.loadConfig(config)
        self.language = language
        self.reader = self.loadReader()
        self.apparatuses = []
        self.elements = {}
        self.groups = {}

        return
    
    def loadConfig(self, config):
        """
        Load the config file, which is in YAML format.
        file: The YAML file to read
        """
        print("Loading config file")
        with open(config, "r") as f:
            return yaml.safe_load(f)

    def loadReader(self):
        """
        Load the pdf file
        """
        file =  self.config["file"][self.language]
        print("reading pages of", file)
        return PyPDF2.PdfReader(file)
    
    def addApparatus(self, app):
        """
        add a apparatus to analyze.
        """
        def add(a):
            if a in self.apparatuses:
                print(a, "is already added")
            else:
                self.apparatuses.append(a)
                self.groups[a] = {}
                self.elements[a] = []
            return
        
        if type(app) == str:
            add(app)
        elif type(app) == list:
            for a in app:
                add(a)
        else: 
            print("type not supported")
        return
       
    def getGroup(self, page, apparatus):
        """
        Return the number and name of the group on the given page.
        also convert a string to an integer. 
        since the pdf converter is not perfect, double spaces can be introduced which need to be corrected for.
        """

        regex = self.config["apparatuses"][apparatus]["regex"]["group"][self.language]
        for res in re.findall(regex, page):
            number = int(float(res[0]))
            name =self.adjustString(res[1])
            if number in self.groups[apparatus].keys():
                ratio = SequenceMatcher(None, name.lower(), self.groups[apparatus][number]).ratio()
                if ratio < 0.9:
                    print(name.lower())
                    print(self.groups[apparatus][number])
                    print(page)
                    raise AssertionError ("items are not similar enough:", ratio)
            else:                
                self.groups[apparatus][number] = name.lower()
        
        return

    def getElements(self, page, apparatus):
        regex = self.config["apparatuses"][apparatus]["regex"]["element"][self.language]
        res = re.findall(regex, page)
        for r in res:
            if r[1] != r[1].upper():
                self.elements[apparatus].append(list(r))
        return 

    def loadPages(self, apparatus):
        """
        load the pages from the reader for the apparatus. The pages are defined in the config file. 
        """
        pages_conf =  self.config["apparatuses"][apparatus]
        return self.reader.pages[pages_conf["start page"] : pages_conf["end page"]]

    def adjustString(self, s):
        """Do string replacements listed in the config file."""

        for adj in self.config["string adjustments"]:
            s = s.replace(adj[0], adj[1])
        return s
    
    def processApparatuses(self):
        for apparatus in self.apparatuses:
            pages = self.loadPages(apparatus)
            for page in pages:
                text = page.extract_text().replace("\n", "")
                print(text)
                self.getGroup(text, apparatus)
                self.getElements(text, apparatus)
        
    def writeResult(self):
        for apparatus, elements in self.elements.items():
            with open(self.config["output directory"] + apparatus + ".tsv", "w", encoding="utf-8") as f:
                for element in elements:
                    f.write(
                        "\t".join([e if e != None else " " for e in element]).replace("\r", " ")
                        + "\n"
                    )

    def expandElements(self):
        def getDifficulty(element):
            difficulty = ["TA", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
            n = element[0].split(".")[1]
            if len(n) == 3 or len(n) == 2:
                return difficulty[int(n[0])]
            elif len(n) == 4:
                return difficulty[int(n[0:2])]
            else:
                raise ValueError("No valid number:", element)
        
        def getValue(element):
            difficulty = getDifficulty(element)
            value = None
            if difficulty in ["TA", "A"]:
                value= 0.1
            if difficulty == "B":
                value= 0.2
            if difficulty == "C":
                value= 0.3
            if difficulty == "D":
                value= 0.4
            if difficulty == "E":
                value= 0.5
            if difficulty == "F":
                value= 0.6
            if difficulty == "G":
                value= 0.7
            if difficulty == "H":
                value= 0.8
            if difficulty == "I":
                value= 0.9
            if difficulty == "J":
                value= 1
            return str(value)

        def getTypeOfElement(element, apparatus):
            group = int(element[3])
            typ= self.config["apparatuses"][apparatus]["group types"][group]
            elementName = element[1]
            if "(D)" in elementName:
                typ="gymnastic"
            return typ

        for apparatus, elements in self.elements.items():
            for element in elements:
                number = element[0]
                grNumber = int(number.split(".")[0].replace("T", ""))
                if apparatus != "vault":
                    element.append(getValue(element))
                element.append(str(grNumber))
                element.append(getDifficulty(element))                
                element.append(getTypeOfElement(element, apparatus))
                

def main():
    extractor = elementExtractor("pages_config.yaml", language="nl")
    # print(extractor.config["apparatuses"]["beam"]["regex"]["element"]["nl"])
    extractor.addApparatus(["floor"])
    # extractor.addApparatus(["vault","uneven bars", "beam", "floor"])
    extractor.processApparatuses()
    extractor.expandElements()
    extractor.writeResult()
if __name__ == main():
    main()