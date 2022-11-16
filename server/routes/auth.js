const express = require("express");
const router = express.Router();

const { createRegister, login } = require("../controllers/auth");

router.get("/register", createRegister);

router.get("/login", login);

module.exports = router;
