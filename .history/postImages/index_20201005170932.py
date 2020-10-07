import csv
import requests
df = open("bridgeData3.csv",'r').readlines()
url = https://b2ptc.herokuapp.com/bridges
finalCsv = df[1:]
for i in finalCsv:
    x = i.split(',')
    
    requests.put(url+x[0],data=...)
    print(x)
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
