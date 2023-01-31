const router = require("express").Router();
const { authController } = require("../controllers/authController");
const { middlewareController } = require("../controllers/middlewareController");

//REGISTER
router.post("/register", authController.registerUser);

//LOGIN
router.post("/login", authController.loginController);

//REFRESH TOKEN
router.post("/refresh", authController.refreshTokenController);

//LOGOUT
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.logoutController
);

module.exports = router;
