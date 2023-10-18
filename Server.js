const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

const carSchema= require('./model/Car')



mongoose.connect('mongodb+srv://test:1234@cluster0.zega40w.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true})
  .then(() => console.log('Connected!'));

  app.post("/create", async (req, res) => {

        
    try {
        const body =  req.body
        console.log(body.name)
        const car = carSchema.create ({
            name: req.body.name,
            fuel: req.body.fuel,
            image:req.body.image ,
            rent:req.body.rent,
            
        })
        
    

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