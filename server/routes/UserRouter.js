const express = require("express");

const UserRouter = express.Router();

const {registerController } = require("../controllers/UserController");

UserRouter.post("/register", registerController)

module.exports = UserRouter;