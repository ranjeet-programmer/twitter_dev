const express = require("express");

const connect = require("./config/database");

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(` App started on port ${PORT}`);

  await connect();

  console.log("mongodb connected");
});
