const CarModel = require("../models/CarsModel");

const addCarController = async (req, res) => {
  const {
    user_id,
    owner,
    carname,
    company,
    cartype,
    rental_price,
    image,
    booking_status,
  } = req.body;

  let carobj = {
    user_id: user_id,
    owner: owner,
    carname: carname,
    company: company,
    cartype: cartype,
    rental_price: rental_price,
    image: image,
    booking_status: booking_status,
  };

  CarModel(carobj)
    .save()
    .then((data) =>
      res.send({
        message: `The car details are mapped to the user successfully`,
        data,
      })
    )
    .catch((error) =>
      res.send({
        message: `The car details are not added to the user due to`,
        error,
      })
    );
};

const getAllCarsController = async (req, res) => {
  CarModel.find().then((data) => {
    if (data.length !== 0) {
      res.send(data);
    } else {
      res.json({
        message: `Coming Soon!...We will be updating the Car model soon......`,
      });
    }
  });
};

const updateCarController = async (req, res) => {
  CarModel.find({ carname: req.params.carname }).then(async (data) => {
    try{
      let filter = {"carname": data[0].carname};
      const car = await CarModel.updateOne(filter, req.body);
      res.send({message: car});
    }catch(error){
      res.send({message: "Please provide a valid car name to update the details!"});
    }    
  });
}

module.exports = {
  addCarController,
  getAllCarsController,
  updateCarController
};
