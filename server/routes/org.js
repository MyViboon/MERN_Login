const express = require("express");
const router = express.Router();

router.get("/create/org", (req, res) => {
  //
  res.send("หน้า ORG");
});

router.get("/update/org", (req, res) => {
  //
  res.send("หน้า Update ORG");
});

module.exports = router;
