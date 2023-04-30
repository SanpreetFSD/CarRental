const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CarsSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  owner: {
    type: String,
  },
  carname: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  cartype: {
    type: String,
    required: true,
  },
  rental_price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  booking_status: {
    type: String,
    required: true,
  }
  
});

const CarsModel = mongoose.model("Car", CarsSchema);

module.exports = CarsModel;
