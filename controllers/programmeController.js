const Programme = require("../models/Programme");
const Day = require("../models/Day");

exports.getProgrammesByDay = async (req, res) => {
  try {
    const { daycode } = req.params;

    const programmes = await Programme.find({ daycode })
      .sort({ progtime: 1 });

    res.json(programmes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSingleDay = async (req, res) => {
  try {
    const { daycode } = req.params;

    const day = await Day.findOne({ daycode });

    if (!day) {
      return res.status(404).json({ message: "Day not found" });
    }

    res.json(day);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProgramme = async (req, res) => {
  try {
    const { daycode, progtime, title } = req.body;

    const programme = new Programme({
      daycode,
      progtime,
      title
    });

    const saved = await programme.save();
    res.status(201).json(saved);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};