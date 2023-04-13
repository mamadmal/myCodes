import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
import statistics as st

#INPUT_DATA
os.chdir(r'C:/Users/Amin-rayane/Downloads/Compressed')
url_in = r'C:/Users/Amin-rayane/Downloads/Compressed/Behaviour_Analysis.xlsx'
DATA = pd.read_excel(url_in, sheet_name='sh1')

flow=DATA['month volume']
n=len(flow)
vol_month_mean=np.mean(flow)

demand=0.75*vol_month_mean
initial_capacity=vol_month_mean*12
PF = 0
storage = np.zeros((n+1 , 1))
perstorage = []
NF = []
storage[0] = initial_capacity
while  PF<=0.05:
    storage[0] = storage[0] - (1 * 10 ^ 9)
    for i in range(1,n):
        storage[i+1]=storage[i]+flow[i]-demand
        # print('storage i +1 ',storage[i+1])

        if storage[i+1]>storage[1]:
            storage[i+1]=storage[1]

        elif storage[i+1] < 0:
            storage[i+1] = 0

        else:
            storage[i+1]=storage[i+1] 
    perstorage <- (storage/storage[1])*100
    NF = perstorage.count(0)
    PF = NF/(n)
    print('PF',PF)


        
