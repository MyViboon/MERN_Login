const express = require("express");
const router = express.Router();
const { create, list, read, update, remove } = require("../controllers/persons");

//middleware
const { auth } = require('../middleware/auth')

//routes @POST localhost:8000/api/person
router.get("/person/:id",auth,list);
router.get("/person",auth,read);
router.post("/person",auth,create);
router.put("/person/:id",auth,update);
router.delete("/person/:id",auth,remove);

module.exports = router;
