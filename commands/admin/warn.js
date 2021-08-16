const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
   name: 'warn',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if (!message.member.permissions.has('ADMINISTRATOR')) return
      const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
      if (!user) return message.reply('Whom do you want to warn') // If User Is Not Provided
      let reason = args.slice(1).join(' ') // For Reason
      if (!reason) reason = 'Not Specified' // If Reason Is Not Provided

      const embed = new MessageEmbed()
         .setAuthor(`${user.user.username} Warned`, user.user.displayAvatarURL({ dynamic: true }))
         .setTimestamp()
         .setColor('RANDOM')
         .setDescription(`
<@${user.id}> Was warned for **${reason}** By <@${message.author.id}>
      `)
      message.channel.send(embed)
      db.add(`warns_${message.guild.id}_${user.id}`, 1)
   }
}