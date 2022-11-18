const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    // console.log('middleware: ', token)
    if (!token) {
      return res.status(401).json("No TOKEN");
    }

    //Verify Token
    const decoded = jwt.verify(token, "jwtSecret");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send("Token Invalid!");
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const { name } = req.user;
    const adminUser = await User.findOne({ name }).exec();
    if (adminUser.role !== "admin") {
      res.status(403).send("Admin Access denied");
    }else{
      next()
    }
  } catch (err) {
    res.status(401).send("Admin Access denied");
  }
};
