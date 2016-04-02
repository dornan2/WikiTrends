# WikiTrends

Find out what's trending on Wikipedia. This application was developed by me (Adrian Dornan) as part of my final year project in Computer Applications in DCU, Ireland.
The user can see what articles are currently trending, what is currently most popular and and predict any future viewing trends. Graphing tools are used to visually display this data to the user.

The application has a Python back end that parses, runs the analytics and stores the viewing statistics for each individual Wikipedia article. This large data set is stored in a MongoDB database and presented to users on a MEAN (Mongo, Express, Angular and Node) stack. MVC, Rest, Git, Jenkins, NPM are some of the tools and frameworks used.

## Installation

If you want to run a local version of the project simply follow the steps below.

1. Open terminal
2. mkdir WikiTrends
3. cd WikiTrends
4. git clone https://github.com/dornan2/WikiTrends
5. npm install
6. node app.js

The application is now running and is available through the browser by accessing localhost. It is going to look a little bit bare though without any data.

### Populating the database

To populate the database you will need to run the Python script to download and analyse the data from Wikipedia. This can be done by the steps below.

1. Open terminal
2. cd WikiTrends
3. cd python
4. python script.py

This will populate the site with the last hours worth of data. It is recomended to schedule this script to run every hour for more accurate analysis. 
