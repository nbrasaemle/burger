var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  conection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "Localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}
 connection.connect();

// var connection = mysql.createConnection({
//   host: "Localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;