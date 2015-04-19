var express = require('express');

var routes = function(Trending100){
    var trending100Router = express.Router();

    trending100Router.route('/trending100')
        .get(function(req, res){
            Trending100.find(function(err, trending100){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(trending100);
            });
        });
    return trending100Router;
};

module.exports = routes;