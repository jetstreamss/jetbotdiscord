const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTU5MTEwNTE1MDU0NDc3MzIy.D3gn4Q.whVMOwSbu7cKSE9XpOUA55s_o4w'

bot.on('ready', function () {
    console.log("Bot Online.");
    bot.user.setActivity("Life's Illusions!", { type: "Watching" });
  });

  bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.reply('Life is an Illusion!');
    }
    if(message.content == 'Bot have you been to space?')
    {
        message.reply('Literally all the time.');
    }
    if(message.content == 'Feelsbadman')
    {
        message.reply('Yes. Yes it does.');
    }
    if(message.content == 'feelsbadman')
    {
        message.reply('Yes. Yes it does.');
    }
    if(message.content == 'Earth')
    {
        message.reply('Yes, it is flat.');
    }
    if(message.channel.id == 548617194821648406){ if(message.member.hasPermission("MANAGE_MESSAGES")){
    if(message.content == 'Purge'){
        let messagecount = parseInt(10);
message.channel.fetchMessages({ limit: messagecount })
  .then(messages => message.channel.bulkDelete(messages));
    }}}
})

bot.login(TOKEN);