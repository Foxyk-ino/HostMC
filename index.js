const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Bescer-a9DS.aternos.me',  // Замените на IP вашего Minecraft сервера
  port: 53484,             // Порт сервера (по умолчанию 25565)
  username: 'HostMC',    // Имя вашего бота
})

bot.on('spawn', () => {
  console.log('Бот подключился к серверу!')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === 'привет') {
    bot.chat('Привет, ' + username + '!')
  }
})


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});
