import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(` App started on port ${PORT}`);

  await connect();

  console.log("mongodb connected");
});
