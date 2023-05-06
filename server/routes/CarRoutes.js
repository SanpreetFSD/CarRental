const express = require("express");
const CarRouter = express.Router();

const { insertCar } = require("../modal/CarsModel")
console.log(insertCar);

CarRouter.post('/', async (req, res) => {
    const {Carname,Modalname,rent,status } = req.body;
    
    try {

        const result = await insertCar({ Carname,Modalname,rent,status})
        console.log(result);
        res.json({
            message: 'user inserted', result
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: 'error in inserting data'
        })

    }
})

module.exports=CarRouter