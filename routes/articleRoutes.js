var express = require('express');

var routes = function(Article){
    var articleRouter = express.Router();

    articleRouter.route('/Articles')
        .get(function(req, res){
            Article.find(function(err, articles){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(articles);
            });
        });
    articleRouter.route('/Articles/:articleId')
        .get(function(req, res){
            Article.findById(req.params.articleId, function(err, article){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(article);
            });
        });

    return articleRouter;
};

module.exports = routes;