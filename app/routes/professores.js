const dbConnection = require("../../config/dbConnection");

module.exports = function (app) {
  app.get("/professores", function (req, res) {
    let sql = "select * from professores";

    dbConnection.query(sql, function (error, result) {
      //res.send(result);
      res.render("professores/professores", { professores: result });
    });
  });
};
