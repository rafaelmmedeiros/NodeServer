const getNotas = require("../models/notasModels");

module.exports = function (app) {
  app.get("/notas", function (req, res) {
    getNotas(function (error, result) {
      res.render("notas/notas", { notas: result });
    });
  });
};
