const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')
module.exports = {
   name: 'mute',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const { Client, Message, MessageEmbed } = require('discord.js');
      const ms = require('ms')

      const target = message.mentions.users.first();
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You need to have ``KICK_MEMBERS`` Permission to use that command!')
      if (target) {

         let mainRole = message.guild.roles.cache.find(role => role.name === 'The Grand Clone Army');
         let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');


         let memberTarget = message.guild.members.cache.get(target.id);

         if (!args[1]) {
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`**<@${memberTarget.user.id}>** has been muted`);
            return
         }
         memberTarget.roles.remove(mainRole.id);
         memberTarget.roles.add(muteRole.id);
         message.channel.send(`**<@${memberTarget.user.id}>** has been muted for ${ms(ms(args[1]))}`);

         setTimeout(function () {
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
         }, ms(args[1]));
      } else {
         message.channel.send('Cant find that member!');
      }
   }
}