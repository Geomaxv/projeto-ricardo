module.exports = function (app) {
  var signup = app.controllers.signup;
  app.get("/signup", signup.index);
  app.post('/cadastrar', signup.signup)
};
