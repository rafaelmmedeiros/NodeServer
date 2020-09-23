const { getNota } = require("../models/estudantesModel");

module.exports = function (app) {
  app.get("/nota", function (req, res) {
    getNota(function (error, result) {
      res.render("estudantes/nota", { notaIndividual: result });
    });
  });
};
