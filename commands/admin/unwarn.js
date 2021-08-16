const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
   name: 'unwarn',
   aliases: ["remwarn", 'uwarn'],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if (!message.member.permissions.has('ADMINISTRATOR')) return
      const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
      if (!user) return message.reply('Who do you want to unwarn') // If No User Is Provided

      const embed = new MessageEmbed()
         .setAuthor(`${user.user.username}`, user.user.displayAvatarURL({ dynamic: true }))
         .setTimestamp()
         .setColor('RANDOM')
         .setDescription(`
<@${user.id}>'s warning is removed by: <@${message.author.id}>
        `)
      message.channel.send(embed)
      db.subtract(`warns_${message.guild.id}_${user.id}`, 1)
   }
}