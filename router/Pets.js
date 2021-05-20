const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pets", {
    data: [
      { id: 1, name: "Shark", description: "Live in the seas." },
      { id: 2, name: "Monky", description: "Ape that live in the jumgle." },
      { id: 3, name: "Lion", description: "Live in south Africa." },
    ],
  });
});

module.exports = router;
