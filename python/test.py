from __future__ import print_function
from datetime import datetime, date, timedelta
from pymongo import MongoClient
from math import sqrt
import pymongo
import urllib.request
import shutil
import gzip
import io
import os
import string
#
# # get file name
#
from statsmodels.tsa.vector_ar.var_model import forecast

now = datetime.now()
year = str(now.year)
month = str("{:0>2d}".format(now.month))
# day = str("{:0>2d}".format(now.day-1))
# hour = str("{:0>2d}".format(now.hour))


day = "14"
hour = "1"

#
# url = "http://dumps.wikimedia.org/other/pagecounts-raw/" + year + "/" + year + "-" + month + "/pagecounts-" + year + month + day + "-" + hour + "0000.gz"
# print("Downloading file from " + url)
#
# file_name = "" + hour + '_' + day + '_' + month + '_' + year
#
# # remove any leading 0's
# month = month.lstrip("0")
# day = day.lstrip("0")
#
# if hour == "00":
#     hour = "0"
# else:
#     hour = hour.lstrip("0")
#
# # # download it
# # print("Downloading " + file_name + ".gz...")
# # with urllib.request.urlopen(url) as response, open(file_name + ".gz", 'wb') as out_file:
# #     shutil.copyfileobj(response, out_file)
# #
# # #extract it
# # print("Extracting .gz file...")
# #
# # inF = gzip.open("" + file_name + ".gz", 'rb')
# # outF = open('tempTextFile.txt', 'wb')
# #
# # for line in inF:
# #     outF.write(line)
# #
# # inF.close()
# # outF.close()
#
client = MongoClient('localhost', 27017)
db = client.test
# db = client.wiki_database
collection = db.article_documents
top = db.top100
#
days_views = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0}

future_forecast = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0}

yearly_views = {
     '1': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '2': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0},
     '3': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '4': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0},
     '5': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '6': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0},
     '7': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '8': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '9': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0},
    '10': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
    '11': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0},
    '12': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0}
}

print("predicting the future...")

# when it is a new month you need to find out what yesterdays date was
# if its a new day updates yearly views and resets day_total and daily views
# start of a new day reset day total and update new yearly
if hour == "0" and day != "1":
    for doc in collection.find({}):
        collection.update(
            {'_id': doc['_id']},
            {'$set': {
                'yearly_views.'+str(month.lstrip("0"))+"."+str(int(day)-1): collection.find_one({"_id": doc['_id']})['day_total'],
                'day_total': 0,
                'daily_views': days_views,
                'future_forecast': future_forecast
                }
            },
            True
        )
else:
    # if it is a new day of a new month update yearly views and reset day_total and monthly total
    if hour == "0" and day == "1":
        for doc in collection.find({}):
            collection.update(
                {'_id': doc['_id']},
                {'$set': {
                    'yearly_views.'+str(int(month)-1)+"."+str((date.today() - timedelta(1)).strftime('%d')): collection.find_one({"_id": doc['_id']})['day_total'],
                    'day_total': 0, 'month_total': 0, 'daily_views': days_views
                    }
                },
                True
            )

if hour == "1":
    for doc in collection.find({}):
        # print(str(doc['yearly_views'][month.lstrip("0")]['1']))
        future = []


        for x in range(1, int(day) + 15):
            if x == 1:
                forecast = doc['yearly_views'][month.lstrip("0")][str(x)]
            if x > int(day):
                forecast = (.5 * doc['yearly_views'][month.lstrip("0")][day]) + ((1 - .5) * forecast)
                collection.update(
                {'_id': doc['_id']},
                {'$set': {
                    'future_forecast.'+str(x-int(day)): forecast
                    }
                },
                True
            )
            else:
                forecast = forecast + .5 * (doc['yearly_views'][month.lstrip("0")][str(x)] - forecast)



if hour == '1':
    # Two week forecast update
    num = 1
    for doc in collection.find({}, {'future_forecast': 1}).sort('future_forecast.14', pymongo.DESCENDING).limit(100):
        db.forecast100.update(
                    {'_id': num},
                    {'$set': {'name': doc['_id'], 'total': doc['future_forecast']['14'], 'forecast': doc['future_forecast']}},
                    True
        )
        num += 1



# clean it
print("Cleaning file of unwanted data and populating database...")

counter = 1

# write check for empty article
# with io.open('tempTextFile.txt', 'r',encoding='utf-8') as infile:
with io.open('sample1.txt', 'r',encoding='utf-8') as infile:
    for line in infile:
        if (line.startswith(("EN ", "En ", "en ")) and
                not line.startswith(("en Category:", "en Wikipedia%3","Help:", "en Portal_talk:", "en Talk%3A", "en Template_talk",
                                        "en Special%", "en Portal:", "en Template_talk:", "en Draft:", "en File:",
                                        "en Category%3A", "en Wiki/", "en Talk%3a", "File_talk:", "en Special:",
                                        "en Talk:", "en Template:", "en User:", "en Wikipedia:", "en Wikipedia_talk:",
                                        "en User_talk", "en Category_talk:", "en Search_search_", "en category:", "en en:",
                                        "en  ", "en Main_Page")) and
                all(c in string.printable for c in line) and
                len(line) < 120 and
                int(line.split()[3])/int(line.split()[2]) > 6732 and
                "." not in line.split()[1] and
                int(line.split()[2]) >= 1
        ):
            hits = int(line.split()[2])
            article_Name = urllib.parse.unquote(line.split()[1], encoding='utf-8')

            # if no document for this article is found creates a document for it
            if collection.find({"_id": article_Name}, {"_id": 1}).limit(1).count() < 1:
                collection.insert(
                    {
                        "_id": article_Name,
                        "day_total": 0,
                        "month_total": 0,
                        "year_total": 0,
                        "daily_views": days_views,
                        "yearly_views": yearly_views,
                        "zScore": 0.0
                    }
                )

            # Sets hourly view and updates day, month, year by the last hour hits
            collection.update(
                {'_id': article_Name},
                {'$set': {'daily_views.' + str(hour): hits},
                 '$inc': {'day_total': hits, 'month_total': hits, 'year_total': hits, }
                },
                True
            )

            # Calculates hourly Z Score for trend identification
            if hits > 1:
                daySoFar = []
                for num in range(0, int(hour)+1):
                    daySoFar.extend([collection.find_one({"_id": article_Name})['daily_views'][str(num)]])

                number = float(len(daySoFar))
                avg = sum(daySoFar) / number
                std = sqrt(sum(((c - avg) ** 2) for c in daySoFar) / number)
                if std == 0.0:
                    std = 1

                collection.update(
                    {'_id': article_Name},
                    {'$set': {'zScore':  (hits - avg) / std}},
                    True
                )

# update top100 table
print("Updating of top 100 collection...")

# daily update
num = 1
for doc in collection.find({'day_total': {'$gt': 0}}, {'day_total': 1}).sort('day_total', pymongo.DESCENDING).limit(100):
    db.daily100.update(
            {'_id': num},
            {'$set': {'name': doc['_id'], 'total': str(doc['day_total'])}},
            True
    )
    num += 1

# monthly update
num = 1
for doc in collection.find({}, {'month_total': 1}).sort('month_total', pymongo.DESCENDING).limit(100):
    db.monthly100.update(
            {'_id': num},
            {'$set': {'name': doc['_id'], 'total': str(doc['month_total'])}},
            True
    )
    num += 1


# yearly update
num = 1
for doc in collection.find({}, {'year_total': 1}).sort('year_total', pymongo.DESCENDING).limit(100):
    db.yearly100.update(
            {'_id': num},
            {'$set': {'name': doc['_id'], 'total': str(doc['year_total'])}},
            True
    )
    num += 1

# trending update
num = 1
for doc in collection.find({}, {'zScore': 1, 'daily_views': 1}).sort('zScore', pymongo.DESCENDING).limit(100):
    db.trending100.update(
                {'_id': num},
                {'$set': {'name': doc['_id'], 'total': doc['daily_views']}},
                True
    )
    num += 1




# print("The database has been successfully updated")
#
# # clean talk files
# print("Deleting old files...")
#
# # os.remove('tempTextFile.txt')
# # os.remove(file_name + ".gz")

