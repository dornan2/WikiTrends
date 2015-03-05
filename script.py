from __future__ import print_function
from datetime import datetime
import urllib.request
import shutil
import gzip
import io
import glob
import os
import string

#get file name
now =  datetime.now()
year = str(now.year)
month = str("{:0>2d}".format(now.month))
day = str("{:0>2d}".format(now.day))
hour = str("{:0>2d}".format(now.hour -4))

url = "http://dumps.wikimedia.org/other/pagecounts-raw/" + year + "/" + year + "-" + month + "/pagecounts-" + year + month + day + "-" + hour + "0000.gz"
print ("Downloading file from " + url)

file_name = "" + hour + '_' + day + '_' + month + '_' + year
"""
# download it
print ("Downloading " + file_name + ".gz...")
with urllib.request.urlopen(url) as response, open(file_name  + ".gz", 'wb') as out_file:
  shutil.copyfileobj(response, out_file)

#extract it
print("Extract .gz file")

inF = gzip.open(file_name + ".gz", 'rb')
outF = open('tempTextFile.txt', 'wb')

for line in inF:
   	outF.write(line)

inF.close()
outF.close()
"""
#clean it
print("Cleaning file of unwanted data.")

with io.open('C:\\Users\\Adrian\\Downloads\\tempTextFile.txt','r',encoding='utf-8') as infile, \
     io.open('C:\\Users\\Adrian\\Downloads\\' + file_name + '.txt','w',encoding='utf-8') as outfile:
    for line in infile:
       	if 	(	line.startswith(("EN ", "En ", "en ")) and 
       			not line.startswith(("en Category:", "en File:", "en Special:", "en Talk:", "en Template:", "en User:", "en Wikipedia:", "en User_talk", "en Category_talk:", "en Search_search_", "en category:", "en en:")) and 
       			all(c in string.printable for c in line) and
       			len(line) < 120
       		):

    	   	outfile.write(line)

print("Deleting old files...")

#os.remove('C:\\Users\\Adrian\\Downloads\\tempTextFile.txt')
#os.remove('C:\\Users\\Adrian\\Downloads\\' + file_name + ".gz")
