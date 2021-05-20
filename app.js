const express = require("express");
const app = express();

// Environment variables
require("dotenv").config();

const port = process.env.PORT || 3000;

// Database connection.
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@alpauul-cluster.gzore.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database."))
  .catch(e => console.log(e));

// Template engine.
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

// Web router
app.use("/", require("./router/Routers"));
app.use("/pets", require("./router/Pets"));

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log("Escuchando solicitud!", port);
});

// app.use((req, res, next) => {
//   res.status(404).sendFile(`${__dirname}/public/404.html`);
// });
