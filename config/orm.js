// Require -------------------------------------
var connection = require("../config/connection.js");

//create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function ( colToSearch, valOfCol, cb) {
    //INSERT INTO burgers (burger_name) VALUES ('Classic');
      var queryString = "INSERT INTO burgers (??) VALUES (?);";
      console.log("El colToSearch es : "+colToSearch);
      console.log("El valOfCol es : "+valOfCol);
      console.log("El query ejecutado en bd: "+queryString);
      connection.query(queryString, [colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  updateOne: function (colName, burger_id, cb) {
    // UPDATE burgers SET devoured = true WHERE id = req.params.id;
    var queryString = "UPDATE burgers SET devoured = "+burger_id[0]+" WHERE id = "+burger_id[1]+ ";";
    
     console.log("El colName es : "+colName[0]);
      console.log("El burger_id es : "+burger_id[1]);
    console.log("El query ejecutado en bd: "+queryString);
    connection.query(queryString,function (err, result) {
       console.log("[mysql error]",err);
      cb(result);
    });
  }
};

// Export file -----------------------------------------------
module.exports = orm;