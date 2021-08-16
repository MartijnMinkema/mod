const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
   name: 'warnings',
   aliases: ["warns"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
      if (!user) return message.reply('Whose Warnings You Want To See?') // If No User Is Provided

      let warnings = db.fetch(`warns_${message.guild.id}_${user.id}`) // Get Users Warning
      if (warnings === null || warnings === 0) warnings = '0' // If No Warning Are Their

      const embed = new MessageEmbed()
         .setAuthor(`${user.user.username} Warnings`, user.user.displayAvatarURL({ dynamic: true }))
         .setTimestamp()
         .setColor('RANDOM')
         .setDescription(`
<@${user.id}> Has **${warnings}** Warning(s)`)
      message.channel.send(embed)
   }
}