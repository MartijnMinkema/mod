const { Client, Message, MessageEmbed, Guild } = require('discord.js');

module.exports = {
   name: 'lock',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if(!message.member.hasPermission('ADMINISTRATOR')) return
      const channels = message.guild.channels.cache.filter((ch) => ch.type !== 'category');
      if (args[0] === 'on') {
         channels.forEach((channel) => {
            channel.updateOverwrite(message.guild.roles.everyone, {
               SEND_MESSAGES: false,
            }).then(() => {
               channel.setName(channel.name += '🔒');
            });
         });
         return message.channel.send('locked all channels');
      } if (args[0] === 'off') {
         channels.forEach((channel) => {
            channel.updateOverwrite(message.guild.roles.everyone, {
               SEND_MESSAGES: true,
            }).then(() => {
               channel.setName(channel.name.replace('🔒', ''));
            });
         });
         return message.channel.send('unlocked all channels');
      }
      return '';

   }
}