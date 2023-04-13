import os
import pandas as pd

# change a directory for os.
os.chdir(r'./')
url_in = r'./Behaviour_Analysis.xlsx'

# retriving data from .xlsx file
data = pd.read_excel(url_in, sheet_name='sh1')
data = data['monthVolume']
print(data)


