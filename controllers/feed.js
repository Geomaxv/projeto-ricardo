module.exports = function (app) {
  var feedController = {
    index: function (req, res) {
      console.log(req.session);
      res.render("feed/index");
    },
  };
  return feedController;
};
