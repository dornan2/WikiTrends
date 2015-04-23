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

# get file name

now = datetime.now()
year = str(now.year)
month = str("{:0>2d}".format(now.month))
day = str("{:0>2d}".format(now.day))
hour = str("{:0>2d}".format(now.hour - 5))

url = "http://dumps.wikimedia.org/other/pagecounts-raw/" + year + "/" + year + "-" + month + "/pagecounts-" + year + month + day + "-" + hour + "0000.gz"
print("Downloading file from " + url)

file_name = "" + hour + '_' + day + '_' + month + '_' + year

# download it
print("Downloading " + file_name + ".gz...")
with urllib.request.urlopen(url) as response, open(file_name + ".gz", 'wb') as out_file:
    shutil.copyfileobj(response, out_file)

#extract it
print("Extracting .gz file...")

inF = gzip.open("C:\\Users\\Adrian\\WikiTrends\\python\\" + file_name + ".gz", 'rb')
outF = open('C:\\Users\\Adrian\\WikiTrends\\python\\tempTextFile.txt', 'wb')

for line in inF:
    outF.write(line)

inF.close()
outF.close()

client = MongoClient('localhost', 27017)
db = client.wiki_database
collection = db.article_documents
top = db.top100

days_views = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0}

yearly_views = {
     '1': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '2': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0},
     '3': {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0},
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

# clean it
print("Cleaning file of unwanted data and populating database...")

num = 1

# write check for empty article
with io.open('C:\\Users\\Adrian\\WikiTrends\\python\\tempTextFile.txt', 'r',encoding='utf-8') as infile:
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
                int(line.split()[2]) >= 10
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

            # when it is a new month you need to find out what yesterdays date was
            # if its a new day updates yearly views and resets day_total and daily views
            if hour == 0 and day > 1:
                collection.update(
                    {'_id': article_Name},
                    {'$set': {
                        'yearly_views.'+str(month)+"."+str(int(day)-1): collection.find_one({"_id": article_Name})['day_total'],
                        'day_total': 0,  "daily_views": days_views
                        }
                    },
                    True
                )
            else:
                # if it is a new day of a new month update yearly views and reset day_total,daily views and monthly total
                if hour == 0 and day == 0:
                    collection.update(
                        {'_id': article_Name},
                        {'$set': {
                            'yearly_views.'+str(int(month)-1)+"."+str((date.today() - timedelta(1)).strftime('%d')): collection.find_one({"_id": article_Name})['day_total'],
                            'day_total': 0, 'month_total': 0, "daily_views": days_views
                            }
                        },
                        True
                    )

            # Sets hourly view and updates day, month, year by the last hour hits
            collection.update(
                {'_id': article_Name},
                {'$set': {'daily_views.' + str(hour): hits},
                 '$inc': {'day_total': hits, 'month_total': hits, 'year_total': hits}
                },
                True
            )

            # Calculates hourly Z Score for trend identification
            daySoFar = []
            for num in range(0, int(hour)+1):
                daySoFar.extend([collection.find_one({"_id": article_Name})['daily_views'][str(num)]])

            number = float(len(daySoFar))
            avg = sum(daySoFar) / number
            std = sqrt(sum(((c - avg) ** 2) for c in daySoFar) / number)
            if(std == 0.0):
                    std = 1
            collection.update(
                {'_id': article_Name},
                {'$set': {'zScore' :  (hits - avg) / std}},
                True
            )

# update top100 table
print("Updating of top 100 collection...")

# daily update
if int(hour) % 1 == 1:
    num = 1
    for doc in collection.find({'day_total': {'$gt': 10 }}, {'day_total': 1 }).sort('day_total', pymongo.DESCENDING).limit(100):
        db.daily100.update(
                {'_id': num},
                {'$set': {'name': doc['_id'], 'total': str(doc['day_total'])}},
                True
            )
        num += 1


# monthly update
if int(hour) % 4 == 0:
    num = 1
    for doc in collection.find({}, {'month_total': 1}).sort('month_total', pymongo.DESCENDING).limit(100):
        db.monthly100.update(
                {'_id': num},
                {'$set': {'name': doc['_id'], 'total': str(doc['month_total'])}},
                True
        )
        num += 1


# yearly update
if int(day) % 2 == 0 & int(hour) == 1:
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
for doc in collection.find({}, {'zScore': 1}).sort('zScore', pymongo.DESCENDING).limit(100):
    db.trending100.update(
                {'_id': num},
                {'$set': {'name': doc['_id'], 'total': str(doc['zScore'])}},
                True
    )
    num += 1

print("The database has been successfully updated")

# clean talk files
print("Deleting old files...")

os.remove('C:\\Users\\Adrian\\WikiTrends\\python\\tempTextFile.txt')
os.remove('C:\\Users\\Adrian\\WikiTrends\\python\\' + file_name + ".gz")