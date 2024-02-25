const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Server connected with the database!");
  } catch (error) {
    console.log("Connection failed:", error);
  }
};

module.exports = connect;
