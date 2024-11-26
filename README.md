# NodeJS_Redis_Queries

Created by **Tarun Mohan Kumar**

# Tweet Analysis with MongoDB and Redis

This repository contains a Node.js project that uses MongoDB and Redis to perform various operations on a dataset of tweets. The project implements several queries to analyze and organize the tweets efficiently.

## Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (version 14 or higher)
2. **MongoDB** (running locally or accessible via URI)
3. **Redis** (running locally)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/tweet-analysis.git
   cd tweet-analysis
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

## Scripts

Each query is implemented in its own script. Below are the details of each query and how to run it.

### Query 1: Count Total Tweets

Description:
Count the total number of tweets and store the result in a Redis key called tweetCount.
How to Run:

```bash
node query1.js
```

Output:
Prints the total number of tweets:

```
There were ### tweets
```

### Query 2: Compute Total Favorites

Description:
Compute the total number of favorites across all tweets and store the result in a Redis key called favoriteCount.
How to Run:

```bash
node query2.js
```

Output:
Prints the total number of favorites:

```
The total number of favorites is ###
```

### Query 3: Count Distinct Users

Description:
Compute how many distinct users are in the dataset. Uses a Redis set to store distinct screen_name values.
How to Run:

```bash
node query3.js
```

Output:
Prints the total number of distinct users:

```
There are ### distinct users in the dataset
```

### Query 4: Leaderboard of Top 10 Users by Tweet Count

Description:
Create a leaderboard of the top 10 users with the most tweets. Uses a Redis sorted set (leaderboard) to store the results.

How to Run:

```bash
node query4.js
```

Output:
Prints the leaderboard:

```
Top 10 Users with More Tweets:

1. User1 - 150 tweets
2. User2 - 145 tweets
...
```

### Query 5: Organize Tweets by User

Description:
Create a structure that:

Stores all tweet IDs for a specific user in a Redis list (tweets:{screen_name}).
Stores the attributes of each tweet in a Redis hash (tweet:{tweetId}).

How to Run:

```bash
node query5.js
```

Output:
Example Data in Redis:

- Redis List:
  ```
  Key: tweets:test
  Value: [123, 143, 173, 213]
  ```
- Redis Hash:
  ```
  Key: tweet:123
  Value: {
  user_name: "test",
  text: "This is a tweet",
  created_at: "2024-11-22",
  screen_name: "test_tweet"
  }
  ```
