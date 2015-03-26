from __future__ import print_function
from datetime import datetime
import urllib.request
import shutil
import gzip
import io
import os
import string

#get file name
now = datetime.now()
year = str(now.year)
month = str("{:0>2d}".format(now.month))
day = str("{:0>2d}".format(now.day))
hour = str("{:0>2d}".format(now.hour -3))

url = "http://dumps.wikimedia.org/other/pagecounts-raw/" + year + "/" + year + "-" + month + "/pagecounts-" + year + month + day + "-" + hour + "0000.gz"
print("Downloading file from " + url)

file_name = "" + hour + '_' + day + '_' + month + '_' + year

# download it
print("Downloading " + file_name + ".gz...")
with urllib.request.urlopen(url) as response, open(file_name + ".gz", 'wb') as out_file:
    shutil.copyfileobj(response, out_file)

#extract it
print("Extract .gz file")

inF = gzip.open("C:\\Users\\Adrian\\FYP\\" + file_name + ".gz", 'rb')
outF = open('C:\\Users\\Adrian\\FYP\\tempTextFile.txt', 'wb')

for line in inF:
    outF.write(line)

inF.close()
outF.close()

#clean it
print("Cleaning file of unwanted data.")

num = 1

#write check for empty article

with io.open('C:\\Users\\Adrian\\FYP\\tempTextFile.txt', 'r',encoding='utf-8') as infile, \
    io.open('C:\\Users\\Adrian\\FYP\\' + file_name + '.txt','w',encoding='utf-8') as outfile:
    for line in infile:
        print(num)
        if (line.startswith(("EN ", "En ", "en ")) and
                 not line.startswith(("en Category:", "en Wikipedia%3","Help:", "en Portal_talk:", "en Talk%3A", "en Template_talk", "en Special%", "en Portal:", "en Template_talk:", "en Draft:", "en File:", "en Category%3A", "en Wiki/", "en Talk%3a", "File_talk:", "en Special:", "en Talk:", "en Template:", "en User:", "en Wikipedia:", "en Wikipedia_talk:", "en User_talk", "en Category_talk:", "en Search_search_", "en category:", "en en:", "en  ")) and
                 all(c in string.printable for c in line) and
                 len(line) < 120 and
                 int(line.split()[3])/int(line.split()[2]) > 6732 and
                 "." not in line.split()[1]
        ):
            outfile.write(line)
        num += 1

#clean talk files
print("Deleting old files...")

os.remove('C:\\Users\\Adrian\\FYP\\tempTextFile.txt')
os.remove('C:\\Users\\Adrian\\FYP\\' + file_name + ".gz")
