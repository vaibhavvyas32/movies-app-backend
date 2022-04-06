const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECT_LINK, {
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
