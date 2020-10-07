import csv
import json
df = open("bridgeData3.csv",'r').readlines()
fin = open('final.csv','r').readlines()
# Skips the header of the csv
finCsv = fin[1:]
finalCsv = df[1:]

obj = {}
# loop through the csv with images
for i in finalCsv:
    x = i.split(',')
    obj[x[1]] = {'bridge_name':x[0],'proj_code':x[1],'before_img':x[2],'after_img':x[3][0:-1]}
# create a final object
finalObj = {}
# check full csv
for i in finCsv:
    x = i.split(',')
    id = x[6]
    # create an object with the key of the id regardless
    finalObj[id]= {}
    row = fin[0].split(',')
    
    # if the id has an image add it to the final object
    if id in obj:
        # Add those images to final object..
        finalObj[id]['before_img'] = obj[id]['before_img']
        finalObj[id]['after_img']  = obj[id]['after_img'][0:-1]
    else:
        finalObj[id]['after_img'] =None
        finalObj[id]['before_img'] =None
        
    # loop therough the header of the full csv for all of the key titles..
    for i in range(len(row)):
        key = row[i].replace(' ',"_")
        key = key.strip()
        val = x[i].strip()
        
        # 8 is the position of the latitude 
        if i == 8:
            key = 'latitude'
            # val = float(val)
        if i == 9:
            key = 'longitude'
        # 11 is the posistion of unNeeded information
        if i == 11:
            continue
        try:
            val = int(val)
        except ValueError:
            val = val
        if key.lower() =='prov_id':
            if type(val) != int:
                val = None
        if key.lower() == 'district_id':
            if type(val) != int:
                val = None
        if key.lower() == 'sector_id':
            if type(val) != int:
                val = None
        if key.lower() == 'cell_id':
            if type(val) != int:
                val = None
        finalObj[id][key.lower()] = val
            
# Create a JSON file
with open('../data/seedData/results.json','w') as fp:
    # Dump the object into the json file
    json.dump(finalObj,fp,indent=4)
# Print on Complete on finish 
print('COMPLETE')