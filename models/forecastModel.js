var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var forecastModel = new Schema({
    _id: {type: String},
    name: {type: Number},
    total: {type: Number},
    forecast: {type: Number}
});

module.exports = mongoose.model('futureForecast', forecastModel);

