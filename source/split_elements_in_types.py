import pandas as pd
import re
from functions import loadConfig, saveJson, loadJson

class elementTyping:
    def __init__(self, config, groupConfig, file, apparatus) -> None:
        self.apparatus = apparatus
        self.config = loadConfig(config)
        # self.loadElements(file)[apparatus]
        # loadJson(groupConfig)

    
    def loadElements(self, file):
        self.elements = loadJson(file)
        return
    def addElements(self, json):
        self.elements = json
        return 
    
    def loadGroups(self, file):
        self.groups = loadJson(file)
        return
    def addGroups(self, json):
        self.groups = json
        return

    def findType(self, element, language):
        """
        For the given element, find the correct type of element, as specified in the config file.
        """
        foundType = None
        for typ in self.config["apparatuses"][self.apparatus]["type"][language]:
            if element.split(" ")[0].lower().replace(",", "") in typ:
                foundType = typ
                break
            
        if not foundType:
            raise ValueError ("no type found for " + element)
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

        # res =  {key:value for key, value in res.items() if key in self.config["apparatuses"][self.apparatus][fase +" vluchtfase"]}
        return res

    
    def processVault(self, elements, language):
        """
        This is vault specific. 
        """
        for element in elements.values():
            e = element["description"]
            t = None
            breakdown = {}
            typ = self.findType(e, language)
            breakdown["type"] = typ
            eerste = self.processVluchtfase(e, "eerste")
            tweede = self.processVluchtfase(e, "tweede")

            if typ == "tsukahara":
                tweede = self.processVluchtfase(e, "eerste")
                eerste = self.processVluchtfase("dont process me", "eerste")
            
            breakdown["eerste vluchtfase"] = eerste
            breakdown["tweede vluchtfase"] = tweede
            element["breakdown"]=breakdown
        
    
    def processOther(self, elements):
        for element in elements.values():
            # print("i", element["group"])
            # print("e", self.config["apparatuses"][self.apparatus])
            cl = self.config["apparatuses"][self.apparatus][int(element["group"])]
            classifications = {key:value for key, value in self.config["classifications"].items() if key in cl}
            # print("cl", cl)
            res = self.getClassifications(classifications, element["description"])
            try:
                if not res["salto"]["vorm"]:
                    res["salto"] = None
            except KeyError:
                pass
            element["breakdown"]= res


    def addGroup(self, elements):

        for element in elements.values():
            # print("g", type(element["group"]))
            # print("p", self.groups[self.apparatus])            
            # print(element)
            element["breakdown"]["group"] = self.groups[self.apparatus][int(element["group"])]

    def process(self, language):
        # for elements in self.elements.values():
        #     print(elements)
        if self.apparatus == "vault":
            self.processVault(self.elements, language)
        elif self.apparatus in ["uneven bars", "beam", "floor"]:
            self.processOther(self.elements)
        else:
            raise ValueError ("please provide a valid apparatus")
        
        self.addGroup(self.elements)
            
    def save(self, file):
        saveJson(file, self.elements)
        

def main():
    apparatus = "uneven bars"
    # configFile = "source/element_grouping.yaml"
    # dataFile = "data/elements.json"
    # groupConfig = "data/groups.json"
    # et = elementTyping(configFile, groupConfig, dataFile, apparatus)
    # et.process()
    # et.save("data/"+apparatus+".json")


if __name__ == main():
    main()