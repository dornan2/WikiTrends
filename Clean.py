import io

__author__ = 'Adrian'

# or int(line.split()[1])/ int(line.split()[3]) > 6700)and ".mp3" not in line.split()[2]:

with io.open('C:\\Users\\Adrian\\FYP\\Valid.txt','r',encoding='utf-8') as infile, \
     io.open('C:\\Users\\Adrian\\FYP\\ValidTest.txt','w',encoding='utf-8') as outfile:
    for line in infile:
        if not (int(line.split()[1])/ int(line.split()[3]) > 6732) and "." not in line.split()[2]:
            outfile.write(line)


with io.open('C:\\Users\\Adrian\\FYP\\Invalid.txt','r',encoding='utf-8') as infile, \
     io.open('C:\\Users\\Adrian\\FYP\\InvalidTest.txt','w',encoding='utf-8') as outfile:
    for line in infile:
         if (int(line.split()[1])/ int(line.split()[3]) > 6732) and "." not in line.split()[2]:
            outfile.write(line)
