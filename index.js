const Discord - require('discord.js');
const bot - new Discord.Client();
const cfg = require('./index.json');
const prefix - ("/"),

bot.on('reday', function () {
    console.log("Je suis prêt à être utilisé !")
})


bot.login(cfg.token);