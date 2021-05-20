const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "My Title" });
});

router.get("/services", (req, res) => {
  res.render("services", { serviceName: "My service" });
});

module.exports = router;
