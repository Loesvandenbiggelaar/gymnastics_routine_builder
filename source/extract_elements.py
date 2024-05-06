import re
import yaml
import json
# import PyPDF2
import fitz
from difflib import SequenceMatcher


def loadConfig(file):
    """
    Load the config file, which is in YAML format.
    file: The YAML file to read
    """
    assert file.endswith(".yaml")
    print("Loading config file")
    with open(file, "r") as f:
        return yaml.safe_load(f)

def loadJson(file):
    assert file.endswith(".json")
    with open(file, "r") as f:
        return json.load(f)

def saveJson(file, elements):
    print('write json to', file)
    assert file.endswith(".json")
    with open(file, "w") as f:
        f.write(json.dumps(elements))

def loadPages(file, page_range):
    pdf = fitz.open(file)
        # Check if the target page is within the range of pages
    # Select the given target pages
    if isinstance(page_range, int):
        if page_range < 0 or page_range >= len(pdf):
            print("Error: Invalid target page number.")
            return
        pages = [page_range]
    elif isinstance(page_range, list):
        pages = range(page_range[0], page_range[1]+1)
    else:
        raise ValueError ("target_page not valid")
    print("page range:", pages)
    return [pdf.load_page(i -1) for i in pages]

def adjustString(s:str, adjustments) -> str:
    """Do string replacements listed in the config file."""

    for adj in adjustments:
        s = s.replace(adj[0], adj[1])
    return s

def cleanText(s:str) -> str:
    return s.replace("|", " ").replace("\t", " ").replace("\n", "").replace("  ", " ").strip()


class ProcessElements:
    def __init__(self,config,language, mens_womens):
        self.config = loadConfig(config)

        self.element_grouping = loadConfig(self.config["element_grouping_file"])
        self.language = language
        self.mens_womens = mens_womens
        self.apparatuses = []
        self.groups = {}
        self.elements = {}
        self.reader = self.initiateReader()

        if self.mens_womens == "mens":
            self.exceptions_dict = loadConfig(self.config["exception_file"])
            self.vaultValues = loadConfig(self.config["vault_values_file"])

    # function to initiate the pdf reader
    def initiateReader(self):
        file =  self.config["file"][self.language]
        print("reading pages of", file)
        return fitz.open(file)
    
    def loadPages(self, apparatus):
        """
        Load the pages from the reader for the apparatus. The pages are defined in the config file. 
        """
        pages_conf =  self.config["apparatuses"][apparatus]
        pages = range(pages_conf["start page"][self.language], pages_conf["end page"][self.language])
        return [self.reader.load_page(i -1) for i in pages]

    def addApparatus(self, app):
        """
        This function adds an apparatus or a list of apparatuses to analyze. 

        Parameters:
        - app: str or list
            The apparatus or list of apparatuses to add.

        Returns:
        None

        Example usage:
        ```
        routine_builder = RoutineBuilder()
        routine_builder.addApparatus("Floor")
        routine_builder.addApparatus(["Vault", "Beam"])
        ```
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
    
    def processRegexResultWomens(self, res, apparatus):
        if apparatus == "vault":
            if len(res) != 3:
                print("[WARNING] not avalid result:", res)
                return
            self.elements[apparatus][res[0]] = {"id":res[0], "description":res[1], "value":float(res[2])}
        else:
            if len(res) != 2:
                print("[WARNING] not avalid result:", res)
                return 
            self.elements[apparatus][res[0]] = {"id":res[0], "description":res[1]}

    def processRegexResultMens(self, res, apparatus, group_number):
        if res[1] in ["|", ""]:
            return
        if res[1].replace(" ", "").replace(".", "").isdigit():
            return

        if self.language == "nl":
            description = res[1]
        else:
            text_description = re.split(r"\|(?=[A-Z|\s|\d|_])", res[1])
            if len(text_description) < 3:
                print("[WARNING], could not process", text_description)
                return
            description = text_description[self.config["language_description_index"][self.language]]

        try:
            if description != description.upper():
                if group_number+"."+res[0] in self.elements[apparatus]:
                    raise ValueError (apparatus, group_number +"."+ res[0], "already exists")
                self.elements[apparatus][group_number+"."+res[0]] = {"id":group_number+"."+res[0], "description":cleanText(s=description)}
        except IndexError:
            print("[WARNING] not a valid result!:", res)
            return


    def extractElementsFromPage(self, text, apparatus, group_number):
        """
        This function extracts the elements from the text. 
        """
        regex = self.config["apparatuses"][apparatus]["regex"]["element"][self.language]
        for res in re.findall(regex, text):
            # print(res)
            if self.mens_womens == "womens":
                self.processRegexResultWomens(res, apparatus)
            else:
                assert self.mens_womens == "mens"
                self.processRegexResultMens(res,apparatus, group_number)
            
        pass

    def assertGroupNameOkay(self, string, group_number, apparatus):
        # check if the description of the group on each page is similar enough.
        # these differences are the results of the poor PDF parsing.
        if not group_number in self.groups[apparatus].keys():
            return
        ratio = SequenceMatcher(None, string, self.groups[apparatus][group_number]).ratio()
        if ratio <0.9:
            print(string)
            print(self.groups[apparatus][group_number])
            raise AssertionError ("items are not similar enough:", ratio)
        return
    

    def extractGroup(self, page, apparatus):
        """
        Return the number and name of the group on the given page.
        also convert a string to an integer. 
        since the pdf converter is not perfect, double spaces can be introduced which need to be corrected for.
        """
        dict_translate_nr = {"I":"1", "II":"2", "III":"3", "IV": "4"}

        regex = self.config["apparatuses"][apparatus]["regex"]["group"][self.language]
        number = None
        
        # define the regex to extract the group nr and group description from each page
        for res in re.findall(regex, page):
            number = dict_translate_nr.get(res[0], res[0].split(".")[0])
            name =cleanText(adjustString(res[1], self.config["string adjustments"]))
            description = name.split("- ")[self.config["language_description_index"][self.language]].lower().capitalize()
            self.assertGroupNameOkay(description,number,apparatus)
            self.groups[apparatus][number] = description

        # assert number
        return number

    def processPage(self, page, apparatus):
        """
        Process the page. This function is called for each page. 
        """
        # get the text of the page, and do some text cleaning
        if self.mens_womens == "womens":
            adjustments = [["\n",""]]
        elif self.mens_womens == "mens":
            adjustments = [["\t", "_"], ["\n", "|"], ["||", "|"], ["Code MAG July 2022155", ""]]
        else:
            raise ValueError (f"{self.mens_womens} is not valid, must be either 'mens' or 'womens'")
        
        text = adjustString(adjustString(page.get_text(),adjustments), self.config["string adjustments"])

        # get the elements which are on the page
        group_number = self.extractGroup(text, apparatus)
        self.extractElementsFromPage(text, apparatus, group_number)

        pass

    def processApparatus(self, apparatus):
        """
        Process the apparatus. This function is called for each apparatus. 
        """

        # get the pages defined in the config file
        # some pipes are introduces to replace newlines for better Regex matching
        pages = self.loadPages(apparatus)
        for page in pages:
            self.processPage(page, apparatus)

        self.addInfoToElements(apparatus)
        pass

    def addInfoToElements(self, apparatus):
        for _id, element in self.elements[apparatus].items():
            group, name = self.addGroupInfoToElement(element, apparatus)
            self.elements[apparatus][_id]["group_number"] = group
            self.elements[apparatus][_id]["group_name"] = name

            if self.mens_womens == "womens":
                self.elements[apparatus][_id]["difficulty"] = self.getDifficultyWomen(element)
            else:
                self.elements[apparatus][_id]["difficulty"] = self.getDifficultyMen(element)
                if apparatus == "vault":
                    self.elements[apparatus][_id]["value"] = self.vaultValues[element["id"]]
                    
                
            self.elements[apparatus][_id]["type"] = self.addTypeOfElement(element, apparatus)
            
            if apparatus != "vault":
                self.elements[apparatus][_id]["value"] = self.getValueOfElement(element)
        return
    

    def addTypeOfElement(self, element, apparatus):
        grouping = self.element_grouping[self.mens_womens]
        # check if the apparatus is specified in the config. if not, the element is assumed to be acrobatic
        if apparatus in grouping :
            _type = grouping[apparatus][element["group_number"]]
        else:
            _type = "acrobatic"
        # if an element starts with (D) that element is a dance element, even though it is 
        # part of a grouping which are all acrobatic elements
        if "(D)" in element["description"]:
            _type = "dance"
        
        return _type


    def addGroupInfoToElement(self, element, apparatus):
        """
        Expand the elements with the group information. 
        """
        group = element["id"].split(".")[0]
        return (group, self.groups[apparatus][group])


    def getValueOfElement(self, element):
        difficulty = ["TA", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        for i, dif in enumerate(difficulty):
            if dif == element["difficulty"]:
                if i == 0:
                    return 0.1
                else:
                    return i/10
            
        print(element["difficulty"])
        raise ValueError("no valid difficulty found!")
        

    def getDifficultyWomen(self, element):
        # possible difficulties. 
        difficulty = ["TA", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        # the numbers after the '.' gives information about the element
        # the first number indicates the difficulty
        element_number_info = element["id"].split(".")[1]
        if len(element_number_info) == 3 or len(element_number_info) == 2:
            return difficulty[int(element_number_info[0])]
        elif len(element_number_info) == 4:
            return difficulty[int(element_number_info[0:2])]
        else: 
            raise ValueError("No valid number:", element)

    def getDifficultyMen(self, element):# -> str | Any
        difficulty = ["TA", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        n = element["id"].split(".")[1]
        difficulty_val = int(n) % 6
        if 6> difficulty_val > 0:
            return difficulty[difficulty_val]
        elif difficulty_val == 0:
            if not self.exceptions_dict:
                return "F"
            v = self.exceptions_dict.get(element["id"], "F")
            return v
        else:
            raise ValueError("No valid number:", element)

    def process(self):
        for apparatus in self.apparatuses:
            self.processApparatus(apparatus)
        return    

    def writeResult(self):
        # saveJson(self.config["output directory"] + "elements.json", self.elements)
        saveJson(self.config["output directory"] +self.language+ "_elements.json", self.elements)
        # saveJson(self.config["output directory"] +self.language+ "_groups.json", self.groups)
        return
def main():
    languages = ["nl", "en", "fr", "es"]
    
    for language in languages:
        print("processing language:", language)

        try:
            extractor_women = ProcessElements("source/pages_config_women.yaml", language, "womens")
            extractor_women.addApparatus(["vault","uneven bars", "beam", "floor"])
            extractor_women.process()
            extractor_women.writeResult()
        except KeyError:
            print(language, "not supported for women!")


        try:
            extractor_men = ProcessElements("source/pages_config_men.yaml",language, "mens")
            extractor_men.addApparatus(["floor", "rings","pommel horse", "vault", "parallel bars", "high bar"])
            extractor_men.process()
            extractor_men.writeResult()
        except KeyError:
            print(language, "not supported for men!")


if __name__ == "__main__":
    main()