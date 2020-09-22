const dbConnection = require("../../config/dbConnection");

const getNotas = (callback) => {
  let sql = "select * from estudantes";
  let results = dbConnection.query(sql, callback);
  return results;
};

module.exports = getNotas;
