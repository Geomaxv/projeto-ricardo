module.exports = function (app) {
  var signUpController = {
    index: function (req, res) {
      res.render("signup/index");
    },
    signup: function(req, res) {
        
    }
  };
  return signUpController;
};
