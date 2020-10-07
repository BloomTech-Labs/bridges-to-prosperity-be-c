import pandas as pd
import requests
df = pd.read_csv("bridgeData3.csv")
# pull each id,before image and after from df
print(df.iloc[2,0:5])
