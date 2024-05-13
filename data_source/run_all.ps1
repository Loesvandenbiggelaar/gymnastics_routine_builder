python .\\data_source\\extract_elements.py
python data_source\\extract_images.py
python data_source/check_quality.py
python data_source/merge_all_files.py
# python data_source/create_keywords.py
pytest data_source/test/check_data_quality.py
