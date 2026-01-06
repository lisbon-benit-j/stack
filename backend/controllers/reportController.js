const Transaction = require("../models/Transaction");

// DATE-WISE REPORT
const getByDate = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        message: "Date is required",
      });
    }

    const data = await Transaction.find({ date });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getByDate,
};
