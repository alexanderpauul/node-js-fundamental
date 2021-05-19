const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.render("index", { title: "My Title" });
});

app.get("/services", (req, res) => {
  res.render("services", { serviceName: "My service" });
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

// app.use((req, res, next) => {
//   res.status(404).sendFile(`${__dirname}/public/404.html`);
// });

app.listen(port, () => {
  console.log("Escuchando solicitud!", port);
});
