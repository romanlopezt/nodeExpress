// Require  -----------------------------------
// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

//create the code that will call the ORM functions 
// using burger specific input for the ORM.
var burger = {
    selectAll: function(data) {
        orm.selectAll("burgers", function(res) {
          data(res);
        }); 
      },
      // The variables cols and vals are arrays.
      insertOne: function(colToSearch, valOfCol, data) {
        orm.insertOne( colToSearch, valOfCol, function(res) {
          data(res);
        });
      },
      updateOne: function(colName, burger_id, data) {
        orm.updateOne(colName, burger_id, function(res) {
          data(res);
        });
      }
};

// Export file  -----------------------------------
module.exports = burger;