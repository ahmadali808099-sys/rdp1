const mineflayer = require('mineflayer');

const SERVER_HOST = "FAKELAPATAOP.aternos.me";
const SERVER_PORT = 43833;

const BOT_COUNT = 10;

function startBot(i) {
  const bot = mineflayer.createBot({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: "bot_" + i,
    version: "1.21"
  });

  bot.on("spawn", () => {
    console.log("bot_" + i + " joined server");
  });

  function reconnect() {
    setTimeout(() => startBot(i), 5000);
  }

  bot.on("end", reconnect);
  bot.on("error", reconnect);
}

for (let i = 1; i <= BOT_COUNT; i++) {
  setTimeout(() => startBot(i), i * 2000);
}
