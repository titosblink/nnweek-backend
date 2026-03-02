const express = require("express");
const router = express.Router();

const { getDays, createDay } = require("../controllers/dayController");
const { getSingleDay } = require("../controllers/programmeController");
const auth = require("../middleware/auth");

// Routes
router.post("/", auth, createDay);      // Add a new day (protected)
router.get("/", getDays);               // Get all days
router.get("/:daycode", getSingleDay);  // Get single day by daycode

module.exports = router;