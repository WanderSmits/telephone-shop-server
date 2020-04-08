const { Router } = require("express");
const auth = require("../auth/middleware");
const Support = require("../models").support;

const router = new Router();

router.post("/", auth, async (req, res, next) => {
  const { reason, subject, description, link, userId } = req.body;

  if (!reason || !subject || !description) {
    return res.status(400).send({
      message: "Please provide a reason, subject, price and description.",
    });
  }

  if (!userId) {
    return res.status(400).send({
      message: "Please login or sign up in order to send the question.",
    });
  }

  // console.log("This is the user number", userId, typeof userId);
  
  try {
    const newSupport = await Support.create({
      reason,
      subject,
      description,
      link,
      userId,
      resolved: false,
    });

    return res.status(201).send({
      message:
        "Request successfully created! We will come back to you shortly.",
      newSupport,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
