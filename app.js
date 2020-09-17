let app = require("./config/server");
let dbConnection = require("./config/dbConnection");

app.get("/", function (req, res) {
  res.render("home/home");
});

app.get("/notas", function (req, res) {
  let sql = "select * from estudantes";

  dbConnection.query(sql, function (error, result) {
    //res.send(result);
    //console.log(result);
    res.render("notas/notas", { notas: result });
  });
});

app.get("/professores", function (req, res) {
  let sql = "select * from professores";

  dbConnection.query(sql, function (error, result) {
    //res.send(result);
    res.render("professores/professores", { professores: result });
  });
});

app.get("/conteudos", function (req, res) {
  let sql = "select * from conteudos";

  dbConnection.query(sql, function (error, result) {
    //res.send(result);
    res.render("conteudos/conteudos", { conteudos: result });
  });
});
