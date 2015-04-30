var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var yearly100Model = new Schema({
    _id: {type: Number},
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('yearly100', yearly100Model);
