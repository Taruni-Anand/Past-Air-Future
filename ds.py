import openaq
import pandas as pd
from pandas.io.json import json_normalize
import statistics
api = openaq.OpenAQ()


status, resp = api.cities()
df = json_normalize(resp)

def get_lat_long(Input_City):
    data = api.locations(df=True,parameters='pm25',city=Input_City)
    data.drop_duplicates(subset=['city'],keep=False,inplace=False)
    return [data.iloc[0,1],data.iloc[0,2]]

def clean_data(data):
    data.sort_index
    data.dropna()
    #delete -999 values as NaN
    #FOR THOMAS
    return data

def get_current(city):
    #Get Current PM25
    df_current_time = api.latest(df = True, parameter = 'pm25', city = city)
    df = df_current_time.sort_index().tail(1)
    
    return df['value']

def predict(value, lam, city):
    res = api.latest(city = city, parameter = 'pm25', limit=100, df=True)
    b =res.groupby([res.index.time])['value'].describe()
    a = [x for x in b['mean']]
    f = 0
    c = 0
    for x in range(len(a)):
        if (a[x]<=value + lam and a[x]>=value-lam) and x<len(a):
            f +=(a[x+1])
            c+=1
            
    return f//c