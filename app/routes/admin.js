const { saveEstudante } = require("../models/estudantesModel");

module.exports = function (app) {
  app.post("/estudante/salvar", function (req, res) {
    let estudante = req.body;
    saveEstudante(estudante, function (results) {
      console.log(results);
      res.redirect("/estudantes");
    });
    //console.log(estudante);
    //res.send(estudante);
    //console.log("Estudante salvar");
  });
};
