var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

// router.get('/', function (req, res, next) {
//   Article.find(function (err, articles) {
//     if (err) return next(err);
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
//   });
// });


router.get('/', function(req, res) {

  res.sendFile('index.html', { root: path.join( 'client/wwww') });
});