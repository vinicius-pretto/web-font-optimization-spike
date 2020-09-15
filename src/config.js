const path = require("path");

const config = {
  port: process.env.PORT || 3000,
  staticFolder: path.resolve("public"),
  staticOptions: {
    index: false,
  },
};

module.exports = config;
