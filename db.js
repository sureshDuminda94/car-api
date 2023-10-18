const express = require("express");
const cors = require("cors");
const Student = require("./config");
const app = express();
const carSchema= require('./model/Car')
app.use(express.json());
app.use(cors());
app.post("/create", async (req, res) => {
    try {
        const body = req.body
        const car = new carSchema ({
            name: body.name,
            fuel: body.fuel,
            image: body.image,
            rent:body.rent
        })

        await car.save()

        res.json({
            success: true,
            message: "Success!"
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: "Invalid Inputs"
        })
    }

});

app.listen(4000, () => console.log("Up & RUnning *4000"));