var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trending100Model = new Schema({
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('trending', trending100Model);

