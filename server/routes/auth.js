const express = require("express");
const router = express.Router();

const { createRegister, login } = require("../controllers/auth");

//routes @POST localhost:8000/api/register
//@Private
router.post("/register", createRegister);

//routes @POST localhost:8000/api/login
//@Public
router.post("/login", login);

module.exports = router;
