const express = require("express");
const router = express.Router();

const {
  stockIn,
  stockOut,
} = require("../controllers/stockController");

// STOCK IN
router.post("/in", stockIn);

// STOCK OUT
router.post("/out", stockOut);

module.exports = router;
