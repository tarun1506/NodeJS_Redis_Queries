import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017" || process.env.MONGO_URI;
const client = new MongoClient(uri);
const dbName = "ieeevisTweets";
const collectionName = "tweet";

export async function getTotalTweets() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const totalTweets = await collection.countDocuments();
    return totalTweets;
  } finally {
    await client.close();
  }
}

export async function getFavoriteCounts() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const favoriteCounts = await collection
      .find({}, { projection: { favorite_count: 1 } })
      .toArray();
    return favoriteCounts;
  } finally {
    await client.close();
  }
}

export async function getUsers() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const users = await collection
      .find({}, { projection: { user: 1 } })
      .toArray();
    return users;
  } finally {
    await client.close();
  }
}

export async function userTweetCount() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const userTweetCounts = await collection
      .aggregate([
        { $group: { _id: "$user.screen_name", tweetCount: { $sum: 1 } } },
        { $sort: { tweetCount: -1 } },
      ])
      .toArray();
    return userTweetCounts;
  } finally {
    await client.close();
  }
}

export async function getTweets() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const tweets = await collection.find().toArray();
    return tweets;
  } finally {
    await client.close();
  }
}
