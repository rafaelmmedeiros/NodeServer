let mysql = require("mysql");

let dbConnection = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "appuser",
    password: "Pa$$w0rd",
    database: "dsw",
  });
};

module.exports = dbConnection;
