const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }



})

module.exports = mongoose.model('Car', carSchema)