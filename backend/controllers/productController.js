const Product = require("../models/Product");

// ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    // validation
    if (!name || quantity === undefined) {
      return res.status(400).json({
        message: "Product name and quantity are required",
      });
    }

    const existing = await Product.findOne({ name });
    if (existing) {
      return res.status(400).json({
        message: "Product already exists",
      });
    }

    const product = new Product({
      name: name.trim(),
      quantity: Number(quantity),
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

module.exports = {
  addProduct,
  getProducts,
};
