var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trending100Model = new Schema({
    _id: {type: Number},
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('trending100', trending100Model);

