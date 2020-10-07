import csv
import requests
bi = open("bridgeData3.csv",mode='r').readlines()
finalcsv = bi[1:]
bid = {}
for i in bi[1:]:
    x = i.split(',')
    bid[x[1]] = ','.join(x[2:])
# bi.close()
# print(bid)

bd = open("final.csv",mode='r').readlines()
bw = open('data_and_img.csv', mode='w')
# print(bd)
bd = bd[1:]
bw.write('province,district,sector,cell,bridge_site_name,project_stage,project_code,bridge_type,latitud,longitud,individuals_served,assessment_date,original_community,community_served,prov_id,district_id,sector_id,cell_id,pre_photo,after_photo')
for i in bd:
    x = i
    x = x.split(',')
    x.pop(11)
    x = ','.join(x)
    # print(x)

    i = i.split(',')
    i = i[6]
    if i in bid:
        # print(i)
        x = x[:-1]+','+ bid[i]
    # print(x)
    else:
        x = x[:-1]+','+ 'null,null'
        # print(x)
    bw.write(x)

bw.close()