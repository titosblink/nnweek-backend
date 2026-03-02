const express = require("express");
const router = express.Router();

const { getProgrammesByDay, getSingleDay, createProgramme } = require("../controllers/programmeController");
const auth = require("../middleware/auth");

// Add a programme (protected)
router.post("/", auth, createProgramme);

// Get all programmes for a specific day
router.get("/:daycode", getProgrammesByDay);

// Get a single day info by daycode
router.get("/day/:daycode", getSingleDay);

module.exports = router;