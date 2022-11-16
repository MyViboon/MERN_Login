const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    return res.status(401).json("No TOKEN");
  }

  try {
    //Verify Token
    const decoded = jwt.verify(token, "jwtSecret");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send("Token Invalid!");
  }
};
