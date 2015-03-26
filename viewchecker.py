from __future__ import print_function
import io
__author__ = 'Adrian'

year = "15"
month = "03"
day = "21"
hour = "0"

total = 0;

while int(hour) < 24:
    file_name = '' + str(hour) + '_' + str(day) + '_' + str(month) + '_' + year
    num = 1

    with io.open('C:\\Users\\Adrian\\FYP\\' + file_name + '.txt','r',encoding='utf-8') as infile:
        for line in infile:
            hits = int(line.split()[2])
            if hits > 1:
                num+=1


    print(str(hour) + ": " + str(num))
    total = total + num
    print(str(total))
    hour = int(hour) + 1

#clean talk files
#print("Deleting old files...")
#os.remove('C:\\Users\\Adrian\\FYP\\tempTextFile.txt')
#os.remove('C:\\Users\\Adrian\\FYP\\' + file_name + ".gz")

#collection.find().sort( { "last24hr.0": -1 } ).limit(25)