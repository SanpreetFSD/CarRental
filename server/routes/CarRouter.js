const express = require("express");
const CarRouter = express.Router();
const { addCarController, getAllCarsController, updateCarController } = require("../controllers/CarsController");

CarRouter.post("/addcar", addCarController);
CarRouter.post("/updatecar/:carname", updateCarController);
CarRouter.get("/getallcars", getAllCarsController);

module.exports = CarRouter;
