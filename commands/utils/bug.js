const discord = require('discord.js');

module.exports = {
   name: 'report',
   aliases: ['bug', 'bugreport'],
   run: async (client, message, args) => {
      const channel = message.guild.channels.cache.get('875376458418249739')
      if (!channel) return message.channel.send('channel doesnt exist')

      let mArgs = args.join(' ')
      const embed = new discord.MessageEmbed()
         .setColor('ORANGE')
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .setTitle('**🚧New Bug🚧**')
         .addField('The bug', mArgs, true)
         .addField('Sender', message.author.tag)
         .setTimestamp()
      channel.send(embed)
   }
}