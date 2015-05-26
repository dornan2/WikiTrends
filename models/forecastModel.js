var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var forecastModel = new Schema({
    _id: {type: Number},
    name: {type: String},
    total: {type: Number},
    forecast: {
        1: Number,
        2: Number,
        3: Number,
        4: Number,
        5: Number,
        6: Number,
        7: Number,
        8: Number,
        9: Number,
        10: Number,
        11: Number,
        12: Number,
        13: Number,
        14: Number
    }
});

module.exports = mongoose.model('forecast100', forecastModel);

