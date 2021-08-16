const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const mongoose = require('mongoose')
const mongoDBURL = 'mongodb+srv://Martijn:Martijn2007@discord-hand.ds2a0.mongodb.net/MartijnJS?authSource=admin&replicaSet=atlas-fu954i-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(console.log(`Mongoose`))
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./commands/`);
module.exports = client;
['handler'].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.token);

