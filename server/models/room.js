const mongoose = require("mongoose")
    num = require('./num.js'),
    numSchema = mongoose.model('num').schema;
// const num = require("num")

const RoomSchema = new mongoose.Schema({
    name: String, 
    numbers: [numSchema],
    background: String,
    creator_id: String,
});

module.exports = mongoose.model("room", RoomSchema);