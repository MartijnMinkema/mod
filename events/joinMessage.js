const client = require('../bot')
const { MessageEmbed } = require('discord.js')

client.on('guildCreate', (guild) => {
   let channelToSend;

   guild.channels.cache.forEach((channel) => {
      if (channel.type === 'text' &&
         !channelToSend &&
         channel.permissionsFor(guild.me).has('SEND_MESSAGES')
      ) channelToSend = channel;
   })

   if (!channelToSend) return

   channelToSend.send(
      new MessageEmbed()
         .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
         .setDescription(' default prefix is `!` and Ill be happy to help this server')
         .setColor('#17ABF0')
         .setTitle('Thanks for adding me')
         .setTimestamp())
})