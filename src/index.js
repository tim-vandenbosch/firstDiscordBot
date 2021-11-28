const Discord = require("Discord.js");
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents });
const dotenv = require("dotenv");
dotenv.config(); // setting up configuration file

// Sems first Discord bot

console.clear();

client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong');
    }
});

client.on("ready", () => console.log("Bot is online"));

client.once('reconnecting', () => {
    console.log('Reconnecting!');
   });

client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on("messageCreate", message => {
    console.log(message.content);
    if(message.content === "hello") message.reply("hello");
});

client.login(process.env.TOKEN);