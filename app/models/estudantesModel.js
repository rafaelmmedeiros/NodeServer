const dbConnection = require("../../config/dbConnection");

const getEstudantes = (callback) => {
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

const saveEstudante = (estudante, callback) => {
  let results = dbConnection().query("insert into estudantes set ?", estudante, callback);
  return results;
};

module.exports = {
  getNota,
  getEstudantes,
  saveEstudante,
};
