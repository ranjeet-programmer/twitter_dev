import express from "express";
import { connect } from "./config/database.js";

import services from "./services/tweet-service.js";

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(` App started on port ${PORT}`);

  await connect();

  let ser = new services();

  // await ser.create({ content: "type module added #veryinterested" });

  console.log("mongodb connected");
});
