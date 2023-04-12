module.exports = function (app) {
  var feed = app.controllers.feed;
  app.get("/feed", feed.index);
};
