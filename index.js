const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("on your mom");
});

bot.on("guildMemberAdd", member => {
    console.log(`${member.id} has joined the server.`);
    
    member.addRole(member.guild.roles.find('name', 'pokemon-trainer'));
    
});

bot.login(process.env.BOT_TOKEN);
