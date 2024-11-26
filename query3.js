import { createClient } from 'redis';
import { getUsers } from './db/myMongoDb.js';

const client = createClient();
const users = await getUsers();
try {
  await client.connect();
  for (const user of users) {
    await client.SADD('screen_name', user.user.screen_name);
  }
  const userCount = await client.SCARD('screen_name');
  console.log(`There are ${userCount} unique users`);
} finally {
  await client.quit();
}