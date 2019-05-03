var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      //fetch all message;
      // id, text, roomname and username
      // select id, text, username from messages

      // The next most common kind of join is the left outer join (there are also right outer joins). The left outer join will return all the same information as an inner join, but will also return all entries from the first table in the query, even the ones that don't meet the ON condition.

      var queryStr = "select messages.id, messages.text, messages.roomname, users.username from messages \
      left outer join users on (messages.userid = userid) \
      order by messages.id desc";
      db.query(queryStr, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    },
    post: function (params, callback) {
      // create a message;
      var queryStr = "insert into messages(text, userid, roomname) \
      values (? (select id from users where username = ? limit 1), ?)";
      db.query(queryStr, params, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    }
  }
};

