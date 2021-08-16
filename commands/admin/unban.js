const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'unban',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if(!args[0]) return message.channel.send('Please provide a users id to unban!')
      try {
         const user = await message.guild.members.unban(args[0])
         return message.channel.send(new MessageEmbed()
         .setTitle(`**${user.tag} was unbanned**`)
         .addField('Admin:', message.author.tag)
         .setColor('RANDOM'))
         
      } catch {
         return message.channel.send('I either couldnt unban it or it was not banned')
      }
   }
}