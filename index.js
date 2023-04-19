let express = require("express");
let load = require("express-load");
let bodyParser = require("body-parser"); //#
let cookieParser = require("cookie-parser"); //#
let expressSession = require("express-session"); //#
let methodOverride = require("method-override");
let path = require("path");
let app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cookieParser("pweb2")); //#
app.use(expressSession()); //#
app.use(bodyParser.json()); //#
app.use(bodyParser.urlencoded({ extended: true })); //#
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
//codigo adicionado
load("models").then("controllers").then("routes").into(app);
app.listen(3000, function () {
  console.log("servidor rodando");
});
