var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var monthly100Model = new Schema({
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('monthly', monthly100Model);

