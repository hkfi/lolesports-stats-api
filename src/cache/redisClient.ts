import redis from "redis";

const portRedis = process.env.PORT_REDIS || "6379";

export const redisClient = redis.createClient(portRedis);
redisClient.on("error", function (error) {
  console.error(error);
});

redisClient.set("key", "value", redis.print);
redisClient.get("key", redis.print);