const mongoose = require("mongoose");

const NumSchema = new mongoose.Schema({
    name: String, 
    locationX: Number,
    locationY: Number,
});

module.exports = mongoose.model("num", NumberSchema);