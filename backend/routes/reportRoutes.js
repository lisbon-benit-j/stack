const express = require("express");
const router = express.Router();
const {
  getByDate,
} = require("../controllers/reportController");

router.get("/date", getByDate);

module.exports = router;
