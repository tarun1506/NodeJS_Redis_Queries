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
   ``` bash
   npm install
   ```

## Scripts
Each query is implemented in its own script. Below are the details of each query and how to run it.

### Query 1: Count Total Tweets
Description:
Count the total number of tweets and store the result in a Redis key called tweetCount.

How to Run:
 ``` bash
 node query1_countTweets.js
 ```
Output:
Prints the total number of tweets:
 ```
 There were ### tweets
 ```

