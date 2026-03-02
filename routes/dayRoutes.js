const express = require("express");
const router = express.Router();
const {
  getDays,
  createDay
} = require("../controllers/dayController");

const express = require("express");
const { getDays } = require("../controllers/dayController");
const { getSingleDay } = require("../controllers/programmeController");
const { createDay } = require("../controllers/dayController");

const auth = require("../middleware/auth");

router.post("/", auth, createDay);
router.get("/", getDays);
router.get("/:daycode", getSingleDay);
router.post("/", createDay);

module.exports = router;