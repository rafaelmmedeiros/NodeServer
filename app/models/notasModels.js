const dbConnection = require("../../config/dbConnection");

const getNotas = (callback) => {
  let sql = "select * from estudantes";
  let results = dbConnection().query(sql, callback);
  return results;
};

const getNota = (callback) => {
  let id = 1;
  let sql = "select nota from estudantes where idestudante = " + id + ";";
  let results = dbConnection().query(sql, callback);
  return results;
};

module.exports = {
  getNota,
  getNotas,
};
