const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'nick',
   aliases: ["rename"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const member = message.mentions.members.first() || message.author

      if(!member) return 

      const arguments = args.slice(1).join(' ')

      if(!arguments) return message.channel.send('Nickname not defined')

      try {
         member.setNickname(arguments)
      } catch (err) {
         console.log('err')
      }
   }
}  