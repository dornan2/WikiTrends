var express = require('express');

var routes = function(Monthly100){
    var monthly100Router = express.Router();

    monthly100Router.route('/monthly100')
        .get(function(req, res){
            Monthly100.find(function(err, monthly100){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(monthly100);
            });
        });
    monthly100Router.route('/monthly100/:position')
        .get(function(req, res){
            Monthly100.findById(req.params.position, function(err, monthly100){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(monthly100);
            });
        });
    return monthly100Router;
};

module.exports = routes;