const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BookingSchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    carid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
    carname: {
      type: String,
      required: true,
    },
    bookingid: {
      type: String,
      required: true,
    },
    booking_price: {
      type: Number,
      required: true,
    },
    booked_by:{
      type: String,
      required: true,
    },
    booking_date: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
