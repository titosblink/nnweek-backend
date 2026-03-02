const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  daynumber: {
    type: Number,
    required: true,
  },
  daydate: {
    type: String,
    required: true,
  },
  daycode: {
    type: Number,
    required: true,
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Day", daySchema);