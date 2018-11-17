var path = require("path");
var express = require("express");

var server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

server.get("/hi", (req, res) => {
  res.send("hi");
});

module.exports = server;
