var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleModel = new Schema({
    _id: {type: String},
    day_total: {type: Number},
    month_total: {type: Number},
    year_total: {type: Number}
});

module.exports = mongoose.model('article_document', ArticleModel);

