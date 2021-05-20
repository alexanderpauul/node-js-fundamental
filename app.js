const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
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
