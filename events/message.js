const { MessageEmbed, Message } = require('discord.js')

const client = require('../bot')

const fs = require('fs')

const discord = require('discord.js')

const levels = require('discord-xp')

levels.setURL('mongodb+srv://Martijn:Martijn2007@discord-hand.ds2a0.mongodb.net/MartijnJS?authSource=admin&replicaSet=atlas-fu954i-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')

client.on('message', async message => {
   const prefix2 = '!';
   let invitelink = ['discord.gg', 'discord.com/invite', 'discordapp.com/invite'];
   let msg = message.content.toLowerCase()
   if (message.author.bot) return;
   if (!message.guild) return;
   
   const randomXP = Math.floor(Math.random() * 29) + 1;
   const leveledUP = await levels.appendXp(message.author.id, message.guild.id, randomXP)
   if(leveledUP) {
      const member = message.author
      const user = await levels.fetch(message.author.id, message.guild.id)
      member.send(`${message.author.tag}. Congrats you have leveled up to **${user.level}** :tada:`)
   }
    
   if (invitelink.some(word => message.content.toLowerCase().includes(word))) {
      await message.delete()
   }
   if (!message.content.startsWith(prefix2)) return;
   const args = message.content.slice(prefix2.length).trim().split(/ +/)
   const cmd = args.shift().toLowerCase();
   if (cmd.length === 0) return;
   let command = client.commands.get(cmd)
   if (!command) command = client.commands.get(client.aliases.get(cmd));
   if (command) command.run(client, message, args);
})