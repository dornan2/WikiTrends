var express = require('express');

var routes = function(Yearly100){
    var yearly100Router = express.Router();

    yearly100Router.route('/yearly100')
        .get(function(req, res){
            Yearly100.find(function(err, yearly100){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(yearly100);
            });
        });
    return yearly100Router;
};

module.exports = routes;