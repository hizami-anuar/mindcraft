const mongoose = require("mongoose")

const HouseSchema = new mongoose.Schema({
    name: String, 
    house: Array,
    creator_id: String,
});

module.exports = mongoose.model("house", HouseSchema);