const { stripeController } = require("../controllers/stripeController");

const router = require("express").Router();

router.post("/payment", stripeController);

module.exports = router;
