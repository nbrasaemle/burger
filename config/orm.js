const connection = require("./connection.js");


// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput ) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString,[tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput, burgerNameInput, devouredInput, valueBurger, valueDevoured) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (??, ??)";
    console.log(queryString);
    connection.query(queryString, [tableInput, burgerNameInput, devouredInput, valueBurger, valueDevoured], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableInput, burgerNameInput, devouredInput, valueBurger, valueDevoured) {
    var queryString =
      "UPDATE ?? SET ?? = ?? WHERE ?? = ??";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
