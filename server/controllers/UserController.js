const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUserController = async (req, res) => {
  const { username, password, email, role } = req.body;
  const hash = await bcrypt.hash(password, saltRounds);
  let userobj = {
    username: username,
    password: hash,
    email: email,    
    role: role
  };
  UserModel.find({ username }).then((data) => {
    if (data.length == 0) {
      UserModel(userobj)
        .save()
        .then(() =>
          res.send({
            message: "user registration successful",
            data,
          })
        )
        .catch((error) =>
          res.send({
            message: "user registration unsuccessful",
            error,
          })
        );
    }
  });
};

module.exports = {
  addUserController,
};
