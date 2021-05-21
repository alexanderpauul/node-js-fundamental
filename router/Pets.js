const express = require("express");
const router = express.Router();

const Pet = require("../models/pet");

router.get("/", async (req, res) => {
  try {
    const dataDB = await Pet.find();

    res.render("pets", {
      data: dataDB,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const dataDB = await Pet.findOne({ _id: id });

  try {
    res.render("pets-details", {
      data: dataDB != null ? dataDB : [],
      response: true,
      message: "Item was found.",
    });
  } catch (error) {
    console.log(error);
    res.render("pets-details", {
      data: [],
      response: false,
      message: `Item nor found, please try again or contact to the administrator.`,
    });
  }
});

router.get("/create", (req, res) => {
  res.render("pets-create");
});

router.post("/create", async (req, res) => {
  const body = req.body;

  try {
    const responseDB = new Pet(body);
    await responseDB.save();
    res.redirect("/pets");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const dataDB = await Pet.findByIdAndDelete({ _id: id });

  try {
    if (dataDB != null) {
      res.json({
        response: true,
        message: "Failed to delete the item.",
      });
    } else {
      res.json({
        response: false,
        message: "Item deleted.",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const dataDB = await Pet.findOne({ _id: id });

  try {
    res.render("pets-edit", {
      data: dataDB != null ? dataDB : [],
      response: true,
      message: "Item was found.",
    });
  } catch (error) {
    console.log(error);
    res.render("pets-edit", {
      data: [],
      response: false,
      message: `Item nor found, please try again or contact to the administrator.`,
    });
  }
});

router.put("/put/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const dataDB = await Pet.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });

    res.json({
      response: true,
      message: "Item was updated.",
    });
  } catch (error) {
    console.log(error);
    res.json({
      response: false,
      message: "Item was NOT updated.",
    });
  }
});

module.exports = router;
