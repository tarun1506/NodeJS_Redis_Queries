import { createClient } from "redis";
import { userTweetCount } from "./db/myMongoDb.js";
const client = createClient();
const userTweetCounts = await userTweetCount();

try {
  await client.connect();
  for (const user of userTweetCounts) {
    if (user._id) {
      await client.zAdd("leaderboard", {
        score: user.tweetCount,
        value: user._id,
      });
    }
  }

  const topUsers = await client.zRangeWithScores(
    "leaderboard",
    0,
    -1,
    { REV: true }
  );

  topUsers.slice(0, 10).forEach((user, index) => {
    console.log(`${index + 1}. ${user.value} - ${user.score} tweets`);
  });
} finally {
  await client.quit();
}
