const { middlewareController } = require("../controllers/middlewareController");
const { userController } = require("../controllers/userController");

const router = require("express").Router();

//GET ALL USER
router.get(
  "/",
  middlewareController.verifyTokenAndAdmin,
  userController.getAllUser
);

//GET USER STATS
router.get(
  "/stats",
  middlewareController.verifyTokenAndAdmin,
  userController.getUserStats
);

//GET USER
router.get(
  "/:id",
  middlewareController.verifyTokenAndAdmin,
  userController.getUser
);

//DELETE USER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndUserAuthorization,
  userController.deleteUser
);

module.exports = router;
