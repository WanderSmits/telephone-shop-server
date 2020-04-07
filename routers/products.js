const { Router } = require("express");

const Products = require("../models").product;

const router = new Router();

router.get("/", async (req, res) => {
  const allProducts = await Products.findAll();

  res.status(200).json(allProducts);
});
module.exports = router;
