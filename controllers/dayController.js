const Day = require("../models/Day");

exports.getDays = async (req, res) => {
  try {
    const days = await Day.find().sort({ daynumber: 1 });
    res.json(days);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDay = async (req, res) => {
  try {
    const { daynumber, daydate, daycode } = req.body;

    const newDay = new Day({
      daynumber,
      daydate,
      daycode
    });

    const saved = await newDay.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};