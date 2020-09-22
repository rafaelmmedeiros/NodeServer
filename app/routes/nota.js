const { getNota } = require("../models/notasModels");

module.exports = function (app) {
  app.get("/nota", function (req, res) {
    getNota(function (error, result) {
      res.render("notas/nota", { notaIndividual: result });
    });
  });
};
