const BookingModel = require("../models/BookingModel");
const CarModel = require("../models/CarsModel");

const addBookingController = async (req, res) => {
  const { userid, carid, bookingid, booking_price, booking_date } = req.body;
  var bookingStatus = false;
  let bookingobj = {
    userid: userid,
    carid: carid,
    bookingid: bookingid,
    booking_price: booking_price,
    booking_date: booking_date,
  };

  CarModel.find({ carid }).then((data) => {
    if (data.length !== 0 && data.booking_status == "Open") {
      bookingStatus = false;
      BookingModel(bookingobj)
        .save()
        .then((data) =>
          res.send({
            message: `Selected car(${carid}) is booked successfully`,
            data,
          })
        )
        .catch((error) =>
          res.send({
            message: `Error while booking the car(${carid}) for rental`,
            error,
          })
        );
    } else {
      bookingStatus = true;
      res.send({ message: `Selected Car(${carid}) is not available!` });
    }
  });
};

module.exports = {
  addBookingController,
};
