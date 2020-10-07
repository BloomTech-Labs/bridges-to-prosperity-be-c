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
    id = int(x[6])
    finalObj[id]= {}
    
    if x[6] in obj:
        
        finalObj[x[6]]['before_img'] = obj[x[6]]['before_img']
        finalObj[x[6]]['after_img'] = obj[x[6]]['after_img'][0:-1]
        row = fin[0].split(',')
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
    
# for i in finalCsv:
#     x = i.split(',')
#     requests.put(url+x[0],data={before:x[2],after:x[3]})
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
