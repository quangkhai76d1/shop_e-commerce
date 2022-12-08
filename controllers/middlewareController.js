const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: async (req, res, next) => {
    const token = req.headers.token;

    if (token) {
      const accessToken = token.split(" ")[1];

      jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
        err && res.status(403).json("Token is not valid");

        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated");
    }
  },

  verifyTokenAndUserAuthorization: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  },

  verifyTokenAndAdmin: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  },
};

module.exports = { middlewareController };
