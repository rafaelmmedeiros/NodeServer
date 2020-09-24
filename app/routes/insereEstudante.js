module.exports = function (app) {
  app.get("/insereestudante", function (req, res) {
    res.render("admin/insereEstudante");
  });
};
