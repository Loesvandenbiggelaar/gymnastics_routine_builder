import pandas as pd
import re
from functions import loadConfig, saveJson

class elementTyping:
    def __init__(self, config, file, apparatus) -> None:
        self.apparatus = apparatus
        self.config = loadConfig(config)
        self.df = self.loadElements(file)

    
    def loadElements(self, file):
        """should be deprecated in the future"""
        return pd.read_csv(file, sep="\t",  names=["number", "element", "value", "group", "difficulty", "type"] )

    
    def findType(self, element):
        """
        For the given element, find the correct type of element, as specified in the config file.
        """
        foundType = None
        for typ in self.config["apparatuses"][self.apparatus]["type"]:
            if element.split(" ")[0].lower() in typ:
                foundType = typ
                break
            
        if not foundType:
            raise ValueError ("no type found for " + e)
        else:
            return foundType
        

    def getClassifications(self, classification, element):
        """
        For the given element, add the correct classifications, like nr of turns or the "salto". If nothing is found, the default as specified in the config is used.
        """
        if isinstance(classification, dict):
            if "default" in classification:
                if classification["default"].lower() == "none":
                    found = None
                else:
                    found = classification["default"]
                for val in classification["values"]:
                    for v in val:
                        if str(v) in element:
                            found = val[0]
                            break
                return found

            else:
                res = {}
                for c, values in classification.items():
                    res[c] = self.getClassifications(values, element)
                return res        
        else:
            raise ValueError ("no valid type found!", classification)
        

    def processVluchtfase(self, element, fase):
        """
        This is specific for vault. an element in vault has two parts, the first and the second phase.
        In the text (element) that is split up by ' - '
        """
        if fase == "eerste":
            val = 0
        elif fase == "tweede":
            val = 1
        else:
            raise ValueError ("please provide either fase 'eerste' or 'tweede'")
        try:
            f = re.split(r"\s[-|–]\s", element)[val]
            res = self.getClassifications(self.config["classifications"], f)
        except IndexError:
            res = self.getClassifications(self.config["classifications"], "do not process me")
        
        if not res["salto"]["vorm"]:
            res["salto"] = None
        return res
    
    def processVault(self):
        """
        This is vault specific. 
        """
        self.elements = {}
        for element in self.df.iterrows():
            e = element[1]["element"]
            t = None
            self.elements[element[1]["number"]] = {}
            typ = self.findType(e)
            self.elements[element[1]["number"]]["type"] = typ
            eerste = self.processVluchtfase(e, "eerste")
            tweede = self.processVluchtfase(e, "tweede")

            if typ == "tsukahara":
                tweede = self.processVluchtfase(e, "eerste")
                tweede["salto"]["richting"] = "achterover"
                eerste = self.processVluchtfase("dont process me", "eerste")
            
            self.elements[element[1]["number"]]["eerste vluchtfase"] = eerste
            self.elements[element[1]["number"]]["tweede vluchtfase"] = tweede
        self.elements
    

    def process(self):
        if self.apparatus == "vault":
            self.processVault()
        else:
            raise ValueError ("please provide a valid apparatus")
    def save(self, file):
        saveJson(file, self.elements)
        

def main():
    apparatus = "vault"
    configFile = "source/element_grouping.yaml"
    dataFile = "data/"+apparatus+".tsv"
    et = elementTyping(configFile, dataFile, apparatus)
    elements = et.process()
    et.save("data/"+apparatus+".json")


if __name__ == main():
    main()