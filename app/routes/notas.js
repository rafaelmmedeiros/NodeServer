const dbConnection = require("../../config/dbConnection");

module.exports = function (app) {
  app.get("/notas", function (req, res) {
    let sql = "select * from estudantes";

    dbConnection.query(sql, function (error, result) {
      //res.send(result);
      //console.log(result);
      res.render("notas/notas", { notas: result });
    });
  });
};
