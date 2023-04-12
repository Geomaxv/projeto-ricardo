module.exports = function (app) {
  let home = app.controllers.home;
  app.get("/", home.index);
  app.post("/entrar", home.login); //#1
  app.get("/sair", home.logout); //#2
};
