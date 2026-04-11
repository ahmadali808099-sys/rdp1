const mineflayer = require('mineflayer');

// ================= CONFIG =================
const SERVER_HOST = "FAKELAPATAOP.aternos.me:"; // 👈 yahan IP likhna
const SERVER_PORT = 43833;            // 👈 yahan port likhna
const BOT_COUNT = 60;                  // 👈 yahan jitne bots chaho
// ========================================

function createBot(id) {
  const bot = mineflayer.createBot({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: `bot_${id}`,
    version: false // ViaVersion support (auto detect)
  });

  bot.on('login', () => {
    console.log(`bot_${id} joined server`);
  });

  bot.on('spawn', () => {
    console.log(`bot_${id} spawned`);
  });

  // reconnect system
  function reconnect() {
    console.log(`bot_${id} reconnecting in 5s...`);
    setTimeout(() => createBot(id), 5000);
  }

  bot.on('end', reconnect);
  bot.on('kicked', reconnect);
  bot.on('error', reconnect);
}

// start all bots
for (let i = 1; i <= BOT_COUNT; i++) {
  setTimeout(() => createBot(i), i * 2000);
}
