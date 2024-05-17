import sys
import os
import unittest

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from data_functions import data_ts_to_json, loadConfig

class TestCheckDataQuality(unittest.TestCase):
    # on initialisation load the test cases yaml file
    def setUp(self):
        self.data = data_ts_to_json(r"_app\src\lib\data\elements\all_elements.ts")
        self.test_cases = loadConfig("data_source/test/test_cases.yaml")
        pass

    def test_check_data_quality(self):
        # loop over all the test cases and check if the values are the same as in the element data
        for language, lang_data in self.test_cases.items():
            for apparatus, test_elements in lang_data.items():
                ids = [str(element) for element in test_elements]
                db_elements = [element for element in self.data[language][apparatus] if element["id"] in ids]
                # print("elem", db_elements)
                for element in db_elements:
                    test_case = test_elements[float(element["id"])]
                    for key, test_value in test_case.items():
                        if element[key] != test_value:
                            print("original value:", element[key])
                            print("test value:", test_value)
                            raise ValueError


    