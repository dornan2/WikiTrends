var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trendModel = new Schema({
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('Trend', trendModel);

