const { middlewareController } = require("../controllers/middlewareController");
const { productController } = require("../controllers/productController");

const router = require("express").Router();

//CREATE PRODUCT
router.post(
  "/",
  middlewareController.verifyTokenAndAdmin,
  productController.createProduct
);

//UPDATE PRODUCT
router.put(
  "/:id",
  middlewareController.verifyTokenAndAdmin,
  productController.updateProduct
);

//GET ALL PRODUCTS
router.get("/", productController.getAllProduct);

//GET PRODUCT
router.get("/:id", productController.getProduct);

//DELETE PRODUCT
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdmin,
  productController.deleteProduct
);

module.exports = router;
