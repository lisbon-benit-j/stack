const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
} = require("../controllers/productController");

// auth middleware is bypassed for now
router.post("/", addProduct);
router.get("/", getProducts);

module.exports = router;
