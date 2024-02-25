require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./db/db.js");
const router = require('./router/app.router.js')
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error));
