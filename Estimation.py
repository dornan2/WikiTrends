# from __future__ import print_function
# import matplotlib as mpl
# from statsmodels.graphics.api import qqplot
# import numpy as np
# from scipy import stats
# import pandas as pd
# import statsmodels.api as sm
# import matplotlib.pyplot as plt
#
# from pymongo import MongoClient
#
# client = MongoClient('localhost', 27017)
# db = client.test
# collection = db.article_documents
#
# ## Reads in article name and current month. Unwinds yearly view and month sub document to show each day
# # df = pd.DataFrame(list(collection.find({}, {"yearly_views.1": 1}).limit(3)), columns=['_id','yearly_views'])
# # dl = df['yearly_views'].apply(pd.Series)
# # dl = dl['1'].apply(pd.Series)
# # df.pop('yearly_views')
# # fin = pd.concat([df, dl], axis=1)
# # print(fin)
#
# # print(sm.datasets.sunspots.NOTE)
# #
# # dta = sm.datasets.sunspots.load_pandas().data
# # dta.index = pd.Index(sm.tsa.datetools.dates_from_range('1700', '2008'))
# # del dta["YEAR"]
#
# with mpl.rc_context():
#     mpl.rc('axes', color_cycle=['#0000FF', '#FF6600'])
#     dta = sm.datasets.sunspots.load_pandas().data[['SUNACTIVITY']]
#     dta.index = pd.DatetimeIndex(start='1700', end='2009', freq='A')
#     res = sm.tsa.ARMA(dta, (3, 0)).fit()
#     fig, ax = plt.subplots()
#     ax = dta.ix['1950':].plot(ax=ax)
#     fig = res.plot_predict('1990', '2012', dynamic=True, ax=ax, plot_insample=False)

import numpy as np
# import matplotlib.pyplot as plt

x = np.arange(0, 5, 0.1);
y = np.sin(x)
plt.plot(x, y)