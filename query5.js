import { createClient } from "redis";
import { getTweets } from "./db/myMongoDb.js";
const client = createClient();
const tweets = await getTweets();
try {
  await client.connect();
  for (const tweet of tweets) {
    const screenName = tweet.user?.screen_name;
    const tweetId = tweet.id_str;

    if (screenName && tweetId) {
      const userTweetsKey = `tweets:${screenName}`;
      await client.lPush(userTweetsKey, tweetId);

      const tweetKey = `tweet:${tweetId}`;
      await client.hSet(tweetKey, {
        user_name: tweet.user.name,
        text: tweet.text,
        created_at: tweet.created_at,
        screen_name: screenName,
      });
    }
  }
  console.log("Tweets organized by user successfully!");
} finally {
  await client.quit();
}
