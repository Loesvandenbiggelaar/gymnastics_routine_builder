import re
import PyPDF2
import yaml
from difflib import SequenceMatcher
from functions import loadConfig, saveJson
from split_elements_in_types import elementTyping


class elementExtractor:
    def __init__(self, config, language) -> None:

        self.config = loadConfig(config)
        self.language = language
        self.reader = self.loadReader()
        self.apparatuses = []
        self.elements = {}
        self.groups = {}

        return
    

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
                self.elements[a] = {}
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
                    raise AssertionError ("items are not similar enough:", ratio)
            else:                
                self.groups[apparatus][number] = name.lower()
        
        return

    def getElements(self, page, apparatus):
        regex = self.config["apparatuses"][apparatus]["regex"]["element"][self.language]
        res = re.findall(regex, page)
        for r in res:
            try:
                if r[1] != r[1].upper():
                    if apparatus == "vault":
                        self.elements[apparatus][r[0]] = {"number":r[0], "description":r[1], "value":r[2]}
                    else:
                        self.elements[apparatus][r[0]] = {"number":r[0], "description":r[1]}
                        
            except IndexError:
                print("[WARNING] not a valid result!:", r)
                pass
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
        saveJson(self.config["output directory"] + "elements.json", self.elements)
        saveJson(self.config["output directory"] + "groups.json", self.groups)
        return


    def expandElements(self):
        def getDifficulty(element):
            difficulty = ["TA", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
            n = element["number"].split(".")[1]
            if len(n) == 3 or len(n) == 2:
                return difficulty[int(n[0])]
            elif len(n) == 4:
                return difficulty[int(n[0:2])]
            else:
                raise ValueError("No valid number:", element)
        
        def getValue(element):
            difficulty = element["difficulty"]
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
            group = int(element["group"])
            typ= self.config["apparatuses"][apparatus]["group types"][group]
            elementName = element["description"]
            if "(D)" in elementName:
                typ="gymnastic"
            return typ

        for apparatus, elements in self.elements.items():
            for element, values in elements.items():
                number = values["number"]
                grNumber = int(number.split(".")[0].replace("T", ""))
                values["difficulty"] = getDifficulty(values)               
                if apparatus != "vault":
                    values["value"] = getValue(values)
                values["group"] = str(grNumber)
                values["type"]=getTypeOfElement(values, apparatus)
            elements = self.doElementTyping(elements, apparatus)
                
                
    def doElementTyping(self, elements, apparatus):
        configFile = "source/element_grouping.yaml"
        dataFile = "data/elements.json"
        groupConfig = "data/groups.json"
        et = elementTyping(configFile, groupConfig, dataFile, apparatus)
        et.addElements(self.elements[apparatus])
        et.addGroups(self.groups)
        return et.process()


def main():
    extractor = elementExtractor("source/pages_config.yaml", language="nl")
    extractor.addApparatus(["vault","uneven bars", "beam", "floor"])
    extractor.processApparatuses()
    extractor.expandElements()
    extractor.writeResult()
if __name__ == main():
    main()