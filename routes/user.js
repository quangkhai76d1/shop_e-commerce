const { middlewareController } = require("../controllers/middlewareController");
const { userController } = require("../controllers/userController");

const router = require("express").Router();

//GET ALL USER
router.get("/", middlewareController.verifyToken, userController.getAllUser);

//DELETE USER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndUserAuthorization,
  userController.deleteUser
);

module.exports = router;
