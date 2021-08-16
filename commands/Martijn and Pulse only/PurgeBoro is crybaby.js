const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'Boro',
   aliases: ["server", 'message'],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if(message.author.id !== '523823660537217027') return message.channel.send('Nahh')
      const code = args.join(' ')
      if(!code) return
      message.delete()
      message.channel.send(code)
   }
}