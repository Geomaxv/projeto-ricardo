module.exports = function (app) {
  let homeController = {
    index: function (req, res) {
      res.render("home/index");
    },
    login: function (req, res) {
      let email = req.body.usuario.email;
      let nome = req.body.usuario.nome;
      if (email && nome) {
        let usuario = req.body.usuario;
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
