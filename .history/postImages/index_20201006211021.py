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
    finalObj[x[6]]= {}
    
    if x[6] in obj:
        
        finalObj[x[6]]['before_img'] = obj[x[6]]['before_img']
        finalObj[x[6]]['after_img'] = obj[x[6]]['after_img']
        finalObj[x[6]]['district'] = x[1]
        finalObj[x[6]]['sector'] = x[2]
        finalObj[x[6]]['cell'] = x[3]
        finalObj[x[6]]['bridge_site'] = x[4]
        finalObj[x[6]]['stage'] = x[5]
        finalObj[x[6]]['id'] = int(x[6])
        finalObj[x[6]]['type'] = x[7]
        finalObj[x[6]]['latt'] = float(x[8])
        finalObj[x[6]]['long'] = float(x[9])
        try:
            serv = float(x[10])
        except:
            serv = x[10]
        sv = x[13].split(' ')[2]
        finalObj[x[6]]['served'] = serv
        finalObj[x[6]]['community_served'] = x[14]
        try:
            pId = int(x[15])
        except :
            pId = x[15]
        finalObj[x[6]]['provId'] = pId
        finalObj[x[6]]['districtId'] = int(x[16])
        finalObj[x[6]]['sectorId'] = int(x[17])
        finalObj[x[6]]['cellId'] = int(x[18][0:-1])
        print(finalObj[x[6]]['before_img'])
        break
    else:
        print(fin[0])
        row = fin[0]
        for i in range(row):
            print(row[i])
            
            
        
        
for key in finalObj:
    print(key)
    
# for i in finalCsv:
#     x = i.split(',')
#     requests.put(url+x[0],data={before:x[2],after:x[3]})
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
