// https://discordapp.com/oauth2/authorize?client_id=716487216649732106&scope=bot&permissions=464896
require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client();

// On ready
client.on('ready', () => {
    console.log(`Ready to rumble.`);
});

// On message
client.on('message', msg => {
    if(msg.content === 'Why?') {
        msg.channel.send('Because.');
    }
});

// Login to Discord
client.login(process.env.TOKEN);