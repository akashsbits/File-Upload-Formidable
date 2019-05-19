const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({ product });
  } catch (err) {
    console.error(err);
  }
};

const getAllProducts = (req, res) => {
  res.status(200).send("Get All Product");
};

module.exports = { createProduct, getAllProducts };
