const express = require("express");

const connect = require("./config/database");

const app = express();

const PORT = 3000;

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(PORT, async () => {
  console.log(` App started on port ${PORT}`);

  await connect();

  console.log("mongodb connected");

  const tweetRepo = new TweetRepository();

  const tweet = await tweetRepo.create({ content: "New with hooks" });

  console.log(tweet);
});
