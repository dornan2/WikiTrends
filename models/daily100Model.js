var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var daily100Model = new Schema({
    name: {type: String},
    total: {type: Number}
});

module.exports = mongoose.model('daily', daily100Model);

