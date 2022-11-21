const Person = require("../models/person");

exports.create = async (req, res) => {
  // res.send('Hello create person')
  try {
    const { name } = req.body;
    console.log(name)
    res.json(await new Person({ name }).save());
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Person Fail");
  }
};

exports.list = async (req, res) => {
  res.send("Hello list person");
};

exports.read = async (req, res) => {
  res.send("Hello read person");
};

exports.update = async (req, res) => {
  res.send("Hello updata person");
};

exports.remove = async (req, res) => {
  res.send("Hello remove person");
};
