module.exports = function (app) {
  var feedController = {
    index: function (req, res) {
      let usuario = req.session.usuario;
      let params = { usuario: usuario };
      res.render("feed/index", params);
    },
  };
  return feedController;
};
