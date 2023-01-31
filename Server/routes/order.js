const { middlewareController } = require("../controllers/middlewareController");
const { orderController } = require("../controllers/orderController");

const router = require("express").Router();

//CREATE ORDER
router.post("/", middlewareController.verifyToken, orderController.createOrder);

//UPDATE ORDER
router.put(
  "/:id",
  middlewareController.verifyTokenAndAdmin,
  orderController.updateOrder
);

//GET ALL CARTS
router.get(
  "/",
  middlewareController.verifyTokenAndAdmin,
  orderController.getAllOrder
);

// GET USERS ORDER
router.get(
  "/:userId",
  middlewareController.verifyTokenAndUserAuthorization,
  orderController.getOrder
);

//DELETE ORDER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdmin,
  orderController.deleteOrder
);

//GET MONTHLY INCOME
router.get(
  "/income",
  middlewareController.verifyTokenAndAdmin,
  orderController.getIncome
);

module.exports = router;
