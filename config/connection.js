// Require  ------------------------------------------
var mysql = require("mysql");

// Export Connection ----------------------------------------
var connection = mysql.createConnection({
    host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "a7rhwi6a468osdg6",
    password: "yg99pen4mdyjimfc",
    database: "k1fgt5npzi2lef75"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;