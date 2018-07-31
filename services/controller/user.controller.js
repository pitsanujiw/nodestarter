const users = require("../model/model.user").users();

exports.getuser = (req, res) => {
  res.status(200).json(users);
};
