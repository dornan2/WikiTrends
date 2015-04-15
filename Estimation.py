import pandas as pd
from pymongo import MongoClient


client = MongoClient('localhost', 27017)
db = client.test
collection = db.article_documents

# Reads in article name and current month. Unwinds yearly view and month sub document to show each day
df = pd.DataFrame(list(collection.find({}, {"yearly_views.1": 1}).limit(3)), columns=['_id','yearly_views'])
dl = df['yearly_views'].apply(pd.Series)
dl = dl['1'].apply(pd.Series)
df.pop('yearly_views')
fin = pd.concat([df, dl], axis=1)

print(fin)
