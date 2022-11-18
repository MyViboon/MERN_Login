const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createRegister = async (req, res) => {
  const { name, password } = req.body;
  try {
    //Check User
    let user = await User.findOne({ name });
    if (user) {
      return res.status(400).send("User already exists");
    }
    user = new User({
      name,
      password,
    });
    //Encrypt Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    //payload return jsonwebtoken
    const payload = {
      user: {
        name: user.name,
        role: user.role,
      },
    };
    jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
    res.send("User Register Complete");
    //-----------------------------------------------
  } catch (err) {
    console.log(err.massage);
    res.status(500).send("Server Error!");
  }
};

exports.login = async (req, res) => {
  const { name, password } = req.body;
  //   console.log(name)
  try {
    //Check User
    let user = await User.findOneAndUpdate({ name }, { new: true });
    if (user) {
      //Compare Encrypt Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Password Invalid");
      }

      //payload return jsonwebtoken
      const payload = {
        user: {
          id: user._di,
          name: user.name,
          role: user.role,
        },
      };
      jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
      // res.send("User Register Complete");
      //-----------------------------------------------
    } else {
      return res.status(400).send("User Invalid");
    }
  } catch (err) {
    console.log(err.massage);
    res.status(500).send("Server Error!");
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.user.name })
      .select("-password")
      .exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};
