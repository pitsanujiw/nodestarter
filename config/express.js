const express = require("express");
const app = express();
const bodyParser = require("body-parser");

module.exports = function() {
  const app = express();
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  require("../services/routes/users.routes")(app);
  app.use(bodyParser.json());
  return app;
};
