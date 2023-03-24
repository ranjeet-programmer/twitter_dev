import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;

    let tags = content.match(/#[a-zA-Z0-9]+/g);

    if (tags && tags.length > 0) {
      tags = tags.map((tag) => tag.substring(1));
    }

    const tweet = await this.tweetRepository.create(data);

    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

    let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);

    if (tags && tags.length > 0) {
      let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));

      newTags = newTags.map((tag) => {
        return {
          title: tag,
          tweets: [tweet.id],
        };
      });

      await this.hashtagRepository.bulkCreate(newTags);

      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });
    }
    return tweet;
  }
}

export default TweetService;
