const express = require("express");
const router = express.Router();

router.get("/create", (req, res) => {
  //
  res.send("หน้า Person");
});

router.get("/update", (req, res) => {
  //
  res.send("หน้า Update Person");
});

module.exports = router;
