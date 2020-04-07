const { Router } = require("express");

const Products = require("../models").product;
const ProductsDetails = require("../models").detail;
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


router.post("/products", auth, async (req, res, next) => {
  const { productName, imageUrl, price, description } = req.body;

  if (!productName || !imageUrl || !price || !description) {
    return res.status(400).send({
      message:
        "Please provide a product name, image link, price and product description.",
    });
  }

  try {
    userId = req.user.id;
    console.log("ARTIST ID", userId);

    // const userOwner = await User.findByPk(userId, {
    //   attributes: ["isOwner"],
    //   raw: true
    // });

    // if (!userOwner.isOwner) {
    //   return res
    //     .status(403)
    //     .send({ message: "You are not authorized to create a product." });
    // }

    const newProduct = await Products.create({
      productName,
      mimageUrl,
      price,
      description,
      userId,
    });

    return res.status(201).send({
      message: "Product successfully created! Good luck with the sales",
      newProduct,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
