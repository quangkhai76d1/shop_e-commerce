const User = require("../models/User");

const userController = {
  //GET ALL USER
  getAllUser: async (req, res) => {
    try {
      const allUser = await User.find();

      allUser && res.status(200).json(allUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      user && res.status(200).json("Deleted user successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = { userController };
