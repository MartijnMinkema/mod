const {Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
name: 'unmute',
aliases: [""],
description: '', 
/**
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async(client, message, args) => {
   const target = message.mentions.users.first()
   if(target){
      let mainRole = message.guild.roles.cache.find(role => role.name === 'Member')
      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

      let memberTarget = message.guild.members.cache.get(target.id)

      memberTarget.roles.add(mainRole.id)
      memberTarget.roles.remove(muteRole.id)
      message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
   } else {
      message.channel.send('Cant find that member')
   }
}
}