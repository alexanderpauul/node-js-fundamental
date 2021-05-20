const express = require("express");
const router = express.Router();

const Pet = require("../models/pet");

router.get("/", async (req, res) => {
  try {
    const dataDB = await Pet.find();
    console.log(dataDB);

    res.render("pets", {
      data: dataDB,
      // data: [
      //   { id: 1, name: "Shark", description: "Live in the seas." },
      //   { id: 2, name: "Monky", description: "Ape that live in the jumgle." },
      //   { id: 3, name: "Lion", description: "Live in south Africa." },
      // ],
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
