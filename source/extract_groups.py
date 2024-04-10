from functions import *
import re 

class ProcessGrouping:
    def __init__(self, config, apparatus, language = "en") -> None:
        self.grouping = {}
        self.config = loadConfig(config)
        self.pdf_file = self.config["file"][language]
        self.apparatus = apparatus
        self.language = language
        self.pages = self.loadPdf()
        self.processPages()
        return
    
    def loadPdf(self):
        """
        Load the pdf file
        """
        print("reading pages of", self.pdf_file)
        start_page = self.config["apparatuses"][self.apparatus]["start page"][self.language]
        end_page = self.config["apparatuses"][self.apparatus]["end page"][self.language]
        return loadPages(self.pdf_file, [start_page, end_page] )

    def processPages(self):
        regex = self.config["apparatuses"][self.apparatus]["regex"]["group"][self.language]
        # print(regex)
        for page in self.pages:
            print(page)
            # print(page.get_text())
            text = adjustString(page.get_text(), self.config["string adjustments"])
            # text = page.get_text()
            print(text)
            res = re.findall(regex, text)
            print(res)
            if res[0][0] == "6.000":
                print(page.get_text())
                break
            assert len(res) == 1
            self.grouping[res[0][0]]=res[0][1].lower().capitalize()
            # break

def main():
    configFile = "source/pages_config.yaml"
    apparatus = "uneven bars"
    processGrouping = ProcessGrouping(configFile, apparatus, "en")
    # print(processGrouping.config)
    # print(processGrouping.loadPdf())
    print(processGrouping.grouping)
    return

if __name__ == main():
    main()