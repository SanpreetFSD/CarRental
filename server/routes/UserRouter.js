const express = require("express");

const UserRouter = express.Router();

const { addUserController } = require("../controllers/UserController");
const { addBookingController } = require("../controllers/BookingController");

UserRouter.post("/adduser", addUserController);
UserRouter.post("/addbooking", addBookingController);

module.exports = UserRouter;
