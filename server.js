const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res, next) => {
  if (req.url === "/") return respondHello(req, res);

  res.end();
});

function respondHello(req, res) {
  res.send(JSON.stringify({ msg: "hello" }));
}

server.listen(PORT);
console.log(`Server listening on ${PORT}`);

if (require.main !== module) module.exports = server;
