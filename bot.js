
const discord = require("discord.js");

const token = require("./token.js");

// const intents = new discord.Intents(32767);

// const client = new discord.Client({ intents });

const client = new discord.Client();

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

client.login(token);