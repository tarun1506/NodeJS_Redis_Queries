import { createClient } from 'redis';
import { getFavoriteCounts } from './db/myMongoDb.js';

const client = createClient();
const favoriteCounts = await getFavoriteCounts();
try {
  await client.connect();
  await client.set('favoriteCount', 0);
  for (const favoriteCount of favoriteCounts) {
    const favorite_count = favoriteCount.favorite_count || 0;
    await client.INCRBY('favoriteCount', favorite_count);
  }
  const favoriteCount = await client.get('favoriteCount');
  console.log(`The total number of favorites is ${favoriteCount}`);
}
finally {
  await client.quit();
}
