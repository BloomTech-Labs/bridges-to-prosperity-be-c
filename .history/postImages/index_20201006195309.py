import csv
import requests
df = open("bridgeData3.csv",'r').readlines()
fin = open('final.csv','r').readlines()
finCsv = fin[1:]
# url = https://b2ptc.herokuapp.com/bridges
finalCsv = df[1:]
obj = {}
for i in finalCsv:
    x = i.split(',')
    obj[x[1]] = {'bridge_name':x[0],'proj_code':x[1],'before_img':x[2],'after_img':x[3]}

for i in finCsv:
    x = i.split(',')
    if x[6] in obj:
        y= obj[x[6]]
        y['province'] = x[0]
        y['district'] = x[1]
        y['sector'] = x[2]
        y['cell'] = x[3]
        y['bridge_site'] = x[4]
        y['stage'] = x[5]
        y['id'] = int(x[6])
        y['type'] = x[7]
        y['latt'] = float(x[8])
        y['long'] = float(x[9])
        try:
            serv = float(x[10])
        except:
            serv = x[10]
        y['served'] = serv 
        rest = x[]
        pjass = 
        
        
        
        
        print(x[11:])
    
# for i in finalCsv:
#     x = i.split(',')
#     requests.put(url+x[0],data={before:x[2],after:x[3]})
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
