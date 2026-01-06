const Product = require("../models/Product");
const Transaction = require("../models/Transaction");


const stockIn = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    if (!name || quantity === undefined) {
      return res.status(400).json({
        message: "Product name and quantity required",
      });
    }

    const product = await Product.findOne({ name });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    product.quantity += Number(quantity);
    await product.save();

    await Transaction.create({
      productName: name,
      type: "IN",
      quantity: Number(quantity),
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const stockOut = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    if (!name || quantity === undefined) {
      return res.status(400).json({
        message: "Product name and quantity required",
      });
    }

    const product = await Product.findOne({ name });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
      });
    }

    product.quantity -= Number(quantity);
    await product.save();

    await Transaction.create({
      productName: name,
      type: "OUT",
      quantity: Number(quantity),
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  stockIn,
  stockOut,
};
