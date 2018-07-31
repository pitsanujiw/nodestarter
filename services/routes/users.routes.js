module.exports = app => {
  const user = require("../controller/user.controller");

  app.get("/test", (req, res) => {
    res.send("Hello");
  });
  app.get("/get_user", (req, res) => {
    user.getuser(req, res);
  });
};
