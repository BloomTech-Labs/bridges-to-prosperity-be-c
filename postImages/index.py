import csv
import requests
bi = open("bridgeData3.csv",mode='r').readlines()
bd = open("final.csv",mode='r').readlines()
finalcsv = bi[1:]
bid = {}
for i in bi[1:]:
    x = i.split(',')
    bid[x[1]] = x[2:]

for i in bd:
    pass