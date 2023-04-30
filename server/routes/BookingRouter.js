const express = require("express");
const BookingRouter = express.Router();
const { addBookingController } = require("../controllers/BookingController");

BookingRouter.post("/addbooking", addBookingController);

module.exports = BookingRouter;
