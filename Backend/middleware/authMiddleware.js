const user = require("../models/userScema");
const { verifyToken } = require("../utils/helper");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.podcastUserToken;

  try {
    if (token) {
      const decode = verifyToken(token);
      const userid = user.findOne({ _id: decode?._id });
      if (!userid) {
        res.status(400).json({ message: "user not found" });
      }
      req.user = userid;
      next()
    }
  } catch (error) {
    console.log(err, "err");
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
