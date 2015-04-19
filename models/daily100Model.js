var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var daily100Model = new Schema({
    _id: {type: Number},
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('daily100', daily100Model);

