var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.username);
  if (req.query.username) {
    request.post(
        'http://api.justyo.co/yo/',
        { form: { 'api_token': 'e1fa3288-0edb-49b7-b3f8-191590bfa3ef',
                  'username': 'IFTTT'
                } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );
  }
  res.render('index', { title: 'Group-Bot' });  
});

module.exports = router;
