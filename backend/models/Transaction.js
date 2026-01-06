const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  productName: String,
  type: {
    type: String,
    enum: ["IN", "OUT"],
  },
  quantity: Number,
  date: String,
  time: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
