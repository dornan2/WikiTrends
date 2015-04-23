var express = require('express');

var routes = function(Daily100){
    var daily100Router = express.Router();

    daily100Router.route('/daily100')
        .get(function(req, res){
            Daily100.find(function(err, daily100){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(daily100);
            });
        });
    daily100Router.route('/daily100/:position')
        .get(function(req, res){
            Daily100.findById(req.params.position, function(err, daily100){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(daily100);
            });
        });
    return daily100Router;
};

module.exports = routes;