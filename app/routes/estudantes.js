const { getEstudantes } = require("../models/estudantesModel");

module.exports = function (app) {
  app.get("/estudantes", function (req, res) {
    getEstudantes(function (error, result) {
      res.render("estudantes/estudantes", { estudantes: result });
    });
  });
};
