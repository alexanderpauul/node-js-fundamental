const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Respondiendo v3...");
});

const port = 3000;
server.listen(port, () => {
  console.log("Escuchando solicitud!");
});
