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
                self.getGroup(text, apparatus)
                self.getElements(text, apparatus)
        
    
    def writeResult(self):
        for apparatus, elements in self.elements.items():
            # print(apparatus)
            # print(elements)
            with open(self.config["output directory"] + apparatus + ".tsv", "w", encoding="utf-8") as f:
                # f.write("number\tdescription\tvalue\tgroup\tdifficulty\n")
                for element in elements:
                    # print(element)
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
        for apparatus, elements in self.elements.items():
            for element in elements:
                number = element[0]
                grNumber = int(number.split(".")[0].replace("T", ""))
                element.append(str(grNumber))

                difficulty = getDifficulty(element)
                element.append(difficulty)
                # print(self.groups)
                # group = self.groups[apparatus][grNumber]
                
                pass

def main():
    extractor = elementExtractor("pages_config.yaml", language="nl")
    extractor.addApparatus(["vault","uneven bars", "beam", "floor"])
    extractor.processApparatuses()
    extractor.expandElements()
    extractor.writeResult()
if __name__ == main():
    main()