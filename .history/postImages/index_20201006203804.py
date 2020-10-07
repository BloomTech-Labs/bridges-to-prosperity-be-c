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
    obj[x[1]] = {'bridge_name':x[0],'proj_code':x[1],'before_img':x[2],'after_img':x[3][0:-1]}

finalObj = {}
for i in finCsv:
    x = i.split(',')
    if x[6] in obj:
        finalObj= obj[x[6]]
        finalObj[x]['province'] = x[0]
        finalObj['district'] = x[1]
        finalObj['sector'] = x[2]
        finalObj['cell'] = x[3]
        finalObj['bridge_site'] = x[4]
        finalObj['stage'] = x[5]
        finalObj['id'] = int(x[6])
        finalObj['type'] = x[7]
        finalObj['latt'] = float(x[8])
        finalObj['long'] = float(x[9])
        try:
            serv = float(x[10])
        except:
            serv = x[10]
        sv = x[13].split(' ')[2]
        finalObj['served'] = serv
        finalObj['community_served'] = x[14]
        try:
            pId = int(x[15])
        except :
            pId = x[15]
        finalObj['provId'] = pId
        finalObj['districtId'] = int(x[16])
        finalObj['sectorId'] = int(x[17])
        finalObj['cellId'] = int(x[18][0:-1])
        
        
        
print(finalObj)
    
# for i in finalCsv:
#     x = i.split(',')
#     requests.put(url+x[0],data={before:x[2],after:x[3]})
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
