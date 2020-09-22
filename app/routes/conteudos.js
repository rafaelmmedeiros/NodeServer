const dbConnection = require("../../config/dbConnection");

module.exports = function (app) {
  app.get("/conteudos", function (req, res) {
    let sql = "select * from conteudos";

    dbConnection.query(sql, function (error, result) {
      //res.send(result);
      res.render("conteudos/conteudos", { conteudos: result });
    });
  });
};
