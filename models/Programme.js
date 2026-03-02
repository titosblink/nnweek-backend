const mongoose = require("mongoose");

const programmeSchema = new mongoose.Schema({
  daycode: {
    type: Number,
    required: true,
  },
  progtime: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Programme", programmeSchema);