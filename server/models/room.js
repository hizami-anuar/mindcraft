const mongoose = require("mongoose");
const num = require("num")

const RoomSchema = new mongoose.Schema({
    name: String, 
    numbers: [num],
    background: String,
    creator_id: String,
});

module.exports = mongoose.model("room", RoomSchema);