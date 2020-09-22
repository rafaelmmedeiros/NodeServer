const app = require("./config/server");

// ROUTES
const rotaHome = require("./app/routes/home");
const rotaNotas = require("./app/routes/notas");
const rotaProfessores = require("./app/routes/professores");
const rotaConteudos = require("./app/routes/conteudos");

rotaHome(app);
rotaNotas(app);
rotaProfessores(app);
rotaConteudos(app);

//