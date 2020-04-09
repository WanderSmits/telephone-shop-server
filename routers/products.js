const { Router } = require("express");
const auth = require("../auth/middleware");
const Products = require("../models").product;
const ProductsDetails = require("../models").detail;
const Orders = require("../models").order;
const User = require("../models").user;

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
      include: [
        { model: ProductsDetails },
        { model: User, attributes: ["id", "name", "email", "phone"] },
      ],
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
  `/order`,
  /* authmiddleware*/ async (req, res) => {
    //DEPENDS ON HOW THE DATA IS PASSED THROUGH REQ.BODY OR REQ.PARAMS (ONLY PLACE ORDER ON DETAILPAGE)
    const { userId, productId } = req.body;
    // const productsId = req.params.id;
    console.log("am i in be?");

    const allProductIds = productId.map((id) => {
      return id;
    });

    console.log("What are my values?", allProductIds.length);

    // const usersId = 1;
    // const productsId = 2;

    try {
      if ((allProductIds.length = 1)) {
        const submitOrder = await Orders.create({
          userId: userId,
          productId: allProductIds,
        });

        return res.json({
          submitOrder,
        });
      }
      if ((allProductIds.length = 2)) {
        const submitOrder = await Orders.create(
          {
            userId: userId,
            productId: allProductIds[0],
          },
          Orders.create({ userId: userId, productId: allProductIds[1] })
        );

        // const submitOrder2 = await Orders.create({
        //   userId: userId,
        //   productId: allProductIds[1],
        // });

        return res.status(201).send({ message: "Order placed", submitOrder });
      }

      if (userId === null) {
        return res.status(404).send({ message: "You are not logged in" });
      }

      if (productId === null) {
        return res.status(404).send({ message: "This product doesnt exist" });
      }
    } catch (e) {
      console.log(e);
    }
  }
);

router.post("/", auth, async (req, res, next) => {
  const { productName, imageUrl, price, description } = req.body;
  const {
    operatingSystem,
    batteryLife,
    screenSize,
    weightInGrams,
    virtualAssistant,
    guaranteeInYears,
  } = req.body;
  console.log(`whats the req body?`, req.body);

  if (!productName || !imageUrl || !price || !description) {
    return res.status(400).send({
      message:
        "Please provide a product name, image link, price and product description.",
    });
  }

  try {
    userId = req.user.id;

    const userOwner = await User.findByPk(userId, {
      attributes: ["isOwner"],
      raw: true,
    });

    if (!userOwner.isOwner) {
      return res
        .status(403)
        .send({ message: "You are not authorized to create a product." });
    }

    const newProduct = await Products.create({
      productName,
      imageUrl,
      price,
      description,
      userId,
    });

    const newProductDetails = await ProductsDetails.create({
      operatingSystem,
      batteryLife,
      screenSize,
      weightInGrams,
      virtualAssistant,
      guaranteeInYears,
      productId: newProduct.id,
    });

    return res.status(201).send({
      message: "Product successfully created! Good luck with the sales",
      newProduct,
      newProductDetails,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
