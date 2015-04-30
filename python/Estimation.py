# from __future__ import print_function
# import pandas as pd
#
# from pymongo import MongoClient
#
# client = MongoClient('localhost', 27017)
# db = client.test
# collection = db.article_documents
#
# # Reads in article name and current month. Unwinds yearly view and month sub document to show each day
# df = pd.DataFrame(list(collection.find({}, {"yearly_views.1": 1}).limit(3)), columns=['_id','yearly_views'])
# dl = df['yearly_views'].apply(pd.Series)
# dl = dl['1'].apply(pd.Series)
# df.pop('yearly_views')
# fin = pd.concat([df, dl], axis=1)
# print(fin)
#
#
# import numpy as np
# from scipy import stats
# import pandas
# import matplotlib.pyplot as plt
#
# import statsmodels.api as sm
#
# from statsmodels.graphics.api import qqplot
# Calculates hourly Z Score for trend identification
from math import sqrt


hits = 20
daySoFar = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

number = float(len(daySoFar))
avg = sum(daySoFar) / number
std = sqrt(sum(((c - avg) ** 2) for c in daySoFar) / number)
if std == 0.0:
    std = 1

print(hits)
print(avg)
print(std)
print((hits - avg) / std)

hits = 2000
daySoFar = [110, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]

number = float(len(daySoFar))
avg = sum(daySoFar) / number
std = sqrt(sum(((c - avg) ** 2) for c in daySoFar) / number)
if std == 0.0:
    std = 1

print(hits)
print(avg)
print(std)
print((hits - avg) / std)
