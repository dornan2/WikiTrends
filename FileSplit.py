import io

__author__ = 'Adrian'

with io.open('C:\\Users\\Adrian\\FYP\\CHECKED.txt','r',encoding='utf-8') as infile, \
     io.open('C:\\Users\\Adrian\\FYP\\Valid.txt','w',encoding='utf-8') as outfile:
    for line in infile:
        if line.startswith("Valid "):
            outfile.write(line)

with io.open('C:\\Users\\Adrian\\FYP\\CHECKED.txt','r',encoding='utf-8') as infile, \
     io.open('C:\\Users\\Adrian\\FYP\\Invalid.txt','w',encoding='utf-8') as outfile:
    for line in infile:
        if line.startswith("Invalid "):
            outfile.write(line)
