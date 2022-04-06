const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://genx:1234@cluster0.0686p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
