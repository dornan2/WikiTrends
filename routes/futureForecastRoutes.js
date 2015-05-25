var express = require('express');

var routes = function(Forecast){
    var forecastRouter = express.Router();

    forecastRouter.route('/Articles')
        .get(function(req, res){
            Forecast.find(function(err, forecast){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(forecast);
            });
        });

    return forecastRouter;
};

module.exports = routes;