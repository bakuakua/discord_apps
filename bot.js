const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})
bot.on('message', msg => {
  if (msg.content.startsWith ('!roll')) {
    let luckynum = Math.floor(Math.random()*101);
    msg.reply('**you rolled '+luckynum.toString()+'**');
  }
})
bot.login('NTQ5ODEzMDg4MTk5OTAxMTk0.D1uS5Q.x6c475rx16F0SWrjREIvogxUH-k')
