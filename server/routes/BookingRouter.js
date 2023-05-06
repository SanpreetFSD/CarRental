const express = require("express");
const BookingRouter = express.Router();
const {
  addBookingController,
  updateBookingController,
  getBookingHistoryByCar,
  getBookingHistoryByUser,
} = require("../controllers/BookingController");

BookingRouter.post("/addbooking/:carname", addBookingController);
BookingRouter.post("/updatebooking/:carname", updateBookingController);

BookingRouter.get("/bookinghistorybycar/:carname", getBookingHistoryByCar);
BookingRouter.get("/bookinghistorybyuser/:booked_by", getBookingHistoryByUser);

module.exports = BookingRouter;
