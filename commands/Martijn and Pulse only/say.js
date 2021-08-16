const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'say',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if(message.author.id !== '444196714665213982') return message.channel.send('Nah')
      const code = args.join(' ')
      if(!code) return
      message.delete()
      message.channel.send(code)
   }
}