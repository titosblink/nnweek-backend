const express = require("express");
const router = express.Router();

const {
  getProgrammesByDay,
  getSingleDay,
  createProgramme
} = require("../controllers/programmeController");
const auth = require("../middleware/auth");

router.post("/", auth, createProgramme);
router.get("/:daycode", getProgrammesByDay);
router.get("/day/:daycode", getSingleDay);
router.post("/", createProgramme);

module.exports = router;