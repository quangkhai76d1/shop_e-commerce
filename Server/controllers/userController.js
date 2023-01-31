const User = require("../models/User");

const userController = {
  //GET ALL USER
  getAllUser: async (req, res) => {
    const query = req.query.new;

    try {
      const allUser = query
        ? await User.find().sort({ id: -1 }).limit(5)
        : await User.find();

      allUser && res.status(200).json(allUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET USER

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET USER STATS

  getUserStats: async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);

      res.status(200).json(data);
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
