import csv
import requests
df = open("bridgeData3.csv",'r').readlines()
# url = https://b2ptc.herokuapp.com/bridges
finalCsv = df[1:]
obj = {}
for i in finalCsv:
    print(i)
# for i in finalCsv:
#     x = i.split(',')
#     requests.put(url+x[0],data={before:x[2],after:x[3]})
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
