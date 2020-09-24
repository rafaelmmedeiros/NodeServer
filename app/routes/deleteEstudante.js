const { deleteEstudante } = require("../models/estudantesModel");

module.exports = function (app) {
  app.post("/estudante/delete/:id", function (req, res) {
    let id = req.params.id;
    //console.log(id);
    deleteEstudante(id, function (results) {
      //console.log(results);
      res.redirect("/estudantes");
    });
  });
};
