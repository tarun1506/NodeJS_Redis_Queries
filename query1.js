import { createClient } from 'redis';
import { getTotalTweets } from './db/myMongoDb.js';
const client = createClient();
const totalTweets = await getTotalTweets();

try{
  await client.connect();
  await client.set('tweetCount', 0);
  for (let i = 0; i < totalTweets; i++) {
    await client.incr('tweetCount');
  }
  const tweetCount = await client.get('tweetCount');
  console.log(`There were ${tweetCount} tweets`);

}
finally {
  await client.quit();
}