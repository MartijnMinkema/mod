const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'announce',
   aliases: ["ann"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const channel = message.mentions.channels.first()
      if(!channel) return
      const announcement = args.slice(1).join(' ')
      if(!announcement) return message.channel.send('Man I cannot send an announcement if you dont give the announcement')
      let embed = new MessageEmbed()
      .setTitle('❗New Announcement❗')
      .setDescription(`**${announcement}**`)
      .setColor('#17ABF0')
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      channel.send(embed)
   }
}