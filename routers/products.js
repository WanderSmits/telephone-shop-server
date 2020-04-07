const { Router } = require("express");

const Products = require("../models").product;
const ProductsDetails = require("../models").detail;
const Orders = require("../models").order;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allProducts = await Products.findAll();

    if (allProducts === null) {
      return res
        .status(404)
        .send({ message: "There are no products in the database" });
    }

    res.status(200).json(allProducts);
  } catch (e) {
    console.log(e);
  }
});

router.get(`/:id`, async (req, res) => {
  const productsId = req.params.id;

  try {
    const productsDetails = await Products.findByPk(productsId, {
      include: [{ model: ProductsDetails }],
    });

    if (productsDetails === null) {
      return res
        .status(404)
        .send({ message: "This product doesn't have exist" });
    }

    return res.json(productsDetails);
  } catch (e) {
    console.log(e);
  }
});

router.post(
  `/:id/order/`,
  /* authmiddleware*/ async (req, res) => {
    //DEPENDS ON HOW THE DATA IS PASSED THROUGH REQ.BODY OR REQ.PARAMS (ONLY PLACE ORDER ON DETAILPAGE)
    // const { usersId } = req.body;
    // const productsId = req.params.id;

    const usersId = 1;
    const productsId = 2;

    try {
      const submitOrder = await Orders.create({
        userId: usersId,
        productId: productsId,
      });

      if (usersId === null) {
        return res.status(404).send({ message: "You are not logged in" });
      }

      if (productsId === null) {
        return res.status(404).send({ message: "This product doesnt exist" });
      }

      return res.json({
        submitOrder,
      });
    } catch (e) {
      console.log(e);
    }
  }
);

module.exports = router;
