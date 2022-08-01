const mongoose = require("mongoose");
//mongodb://localhost:27017/expense_data

mongoose.connect("mongodb://localhost:27017/expense_data");
module.exports = mongoose;