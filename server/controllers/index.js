var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      // a function which handles posting a message to the database
        // params are passed into models/index.js post functions
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      models.messages.post(params, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [ req.body[username] ];
      models.username.post(params, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    }
  }
};

