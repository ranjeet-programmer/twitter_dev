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

  const tweet = await tweetRepo.getWithComment("64141c54b7a9cd80f17ff69d");

  // const comment = await Comment.create({
  //   content: "new comment",
  // });

  // tweet.comments.push(comment);

  // await tweet.save();

  console.log(tweet);
});
