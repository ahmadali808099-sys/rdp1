const mineflayer = require('mineflayer');

const SERVER_HOST = "YOUR_IP";
const SERVER_PORT = 25565;

const BOT_COUNT = 50;

function startBot(i) {
  const bot = mineflayer.createBot({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: "bot_" + i,
    version: "1.21"
  });

  bot.on("spawn", () => {
    console.log("bot_" + i + " joined");
  });

  bot.on("end", () => {
    setTimeout(() => startBot(i), 5000);
  });
}

for (let i = 1; i <= BOT_COUNT; i++) {
  setTimeout(() => startBot(i), i * 2000);
}
