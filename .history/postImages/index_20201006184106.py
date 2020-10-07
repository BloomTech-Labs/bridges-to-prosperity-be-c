import csv
import requests
df = open("bridgeData3.csv",'r').readlines()
# url = https://b2ptc.herokuapp.com/bridges
finalCsv = df[1:]
obj = {}
for i in finalCsv:
    obj[i[0]] = {projectCode:i[1],before_image:i[2],after_image:i[3]}
    
print(finalCsv)
# for i in finalCsv:
#     x = i.split(',')
#     requests.put(url+x[0],data={before:x[2],after:x[3]})
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
