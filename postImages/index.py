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
for i in bd:
    x = i
    i = i.split(',')
    i = i[6]
    if i in bid:
        print(i)
        x = x + bid[i]
    print(x)
    bw.write(x)

bw.close()