import csv
df = open("bridgeData3.csv",'r').readlines()
x = df[]
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id 
# and then put the before and after image in an dict and place it as the data for the put request
