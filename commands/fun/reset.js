const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'remove',
   aliases: ["unnick", 'remnick',],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const member = message.mentions.members.first() || message.author
      if(!member) return 

      try {
         member.setNickname(null)
      } catch (error) {
         console.log(error)
      }
   }
}