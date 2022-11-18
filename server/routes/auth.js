const express = require("express");
const router = express.Router();

const { createRegister, login, currentUser } = require("../controllers/auth");

//middleware
const { auth, adminCheck } = require("../middleware/auth");

//routes @POST localhost:8000/api/register
//@Private
router.post("/register", createRegister);

//routes @POST localhost:8000/api/login
//@Public
router.post("/login", login);

//routes @POST localhost:8000/api/current-user
//@Private
router.post("/current-user", auth, currentUser);
//routes @POST localhost:8000/api/current-user
//@Private
router.post("/current-admin", auth, adminCheck, currentUser);

module.exports = router;
