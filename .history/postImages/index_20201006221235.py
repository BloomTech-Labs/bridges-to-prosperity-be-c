import csv
import json
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
    id = x[6]
    finalObj[id]= {}
    row = fin[0].split(',')
    
    
    if id in obj:
        
        finalObj[id]['before_img'] = obj[id]['before_img']
        finalObj[id]['after_img'] = obj[id]['after_img'][0:-1]
    for i in range(len(row)):
        key = row[i].replace(' ',"_")
        key = key.strip()
        val = x[i].strip()
        
        
        if i == 8:
            key = 'latitude'
            # val = float(val)
            
        if i == 9:
            key = 'longitude'
            # val = float(val)
        if i == 11:
            
            continue
        
        
        try:
            val = int(val)
        except ValueError:
            val = val
        
        finalObj[id][key.lower()] = val
            
            
        
        
print(finalObj['1013351'])
    
with open('results.json','w') as fp:
    json.dump(finalObj,fp,indent=4)