module.exports = function (app) {
  let homeController = {
    index: function (req, res) {
      res.render("home/index");
    },
    login: function (req, res) {
      console.log("vou printar o req.body");
      console.log(req);
      let email = req.body.email;
      let nome = req.body.nome;
      console.log(req.body);
      if (email && nome) {
        let usuario = { nome, email };
        usuario.reviews = [];
        req.session.usuario = usuario;
        res.redirect("/feed");
      } else {
        res.redirect("/");
      }
    },
    logout: function (req, res) {
      //#2
      req.session.destroy();
      res.redirect("/");
    },
  };
  return homeController;
};
