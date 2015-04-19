var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var monthly100Model = new Schema({
    _id: {type: Number},
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('monthly100', monthly100Model);

