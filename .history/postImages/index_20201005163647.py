import pandas as pd
import requests

 

df = pd.read_csv("bridgeData3.csv")

print(df.iloc[2,0:5])
