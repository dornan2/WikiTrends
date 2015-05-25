var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var forecastModel = new Schema({
    _id: {type: Number},
    name: {type: String},
    total: {type: Number},
    forecast: {type: Number}
});

module.exports = mongoose.model('forecast', forecastModel);

