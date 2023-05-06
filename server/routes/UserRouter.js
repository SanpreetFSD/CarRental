const express = require("express");
const UserRouter = express.Router();

const { addUserController, updateUserController } = require("../controllers/UsersController");

UserRouter.post("/adduser", addUserController);
UserRouter.post("/updateuser/:name", updateUserController)

module.exports = UserRouter;
