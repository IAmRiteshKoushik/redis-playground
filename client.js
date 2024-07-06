const { Redis } = require("ioredis");

const client = new Redis(); // localhost:6379 a redis instance will run

module.exports = client;
