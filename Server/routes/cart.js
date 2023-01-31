const { middlewareController } = require("../controllers/middlewareController");
const { cartController } = require("../controllers/cartController");

const router = require("express").Router();

//CREATE CART
router.post("/", middlewareController.verifyToken, cartController.createCart);

//UPDATE CART
router.put(
  "/:id",
  middlewareController.verifyTokenAndUserAuthorization,
  cartController.updateCart
);

//GET ALL CARTS
router.get(
  "/",
  middlewareController.verifyTokenAndAdmin,
  cartController.getAllCart
);

//GET CART
router.get(
  "/:userId",
  middlewareController.verifyTokenAndUserAuthorization,
  cartController.getCart
);

//DELETE CART
router.delete(
  "/:id",
  middlewareController.verifyTokenAndUserAuthorization,
  cartController.deleteCart
);

module.exports = router;
