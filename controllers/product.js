const Product = require("../models/Product");
// const { CustomAPIError, NotFoundError, BadRequestError } = require("../errors");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({ product });
};

const getAllProducts = (req, res) => {
  res.status(200).send("Get All Product");
};

module.exports = { createProduct, getAllProducts };
