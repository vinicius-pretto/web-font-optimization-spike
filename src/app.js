const express = require("express");
const path = require("path");
const compression = require("compression");
const config = require("./config");
const app = express();

app.use(compression());
app.use(express.static(config.staticFolder, config.staticOptions));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

module.exports = app;
