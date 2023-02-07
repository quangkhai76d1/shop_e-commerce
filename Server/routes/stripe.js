const { stripeController } = require("../controllers/stripeController");

const router = require("express").Router();

router.post("/payment", stripeController.payment);

module.exports = router;
