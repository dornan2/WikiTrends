var express = require('express');

var routes = function(Trend){
    var trendRouter = express.Router();

    trendRouter.route('/Trends')
        .post(function(req, res){
            var trend = new Trend(req.body);

            trend.save();
            res.status(201).send(trend);
        })
        .get(function(req, res){
            Trend.find(function(err, trends){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(trends);
            });
        });

    trendRouter.route('/Trends/:trendId')
        .get(function(req, res){
            Trend.findById(req.params.trendId, function(err, trend){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(trend);
            });
        })
        .put(function(req, res){
            Trend.findById(req.params.trendId, function(err, trend){
                if(err)
                    res.status(500).send(err);
                else
                    trend.name = req.body.name;
                    trend.total = req.body.total;
                    book.save();
                    res.json(trend);
            });
        });
    return trendRouter;
};

module.exports = routes;