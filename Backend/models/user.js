const mongoose = require("mongoose");

//Create format or Schema for database

const userSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: Date
});

module.exports = mongoose.model("user",userSchema);