const discord = require('discord.js');

module.exports = {
   name: 'suggest',
   aliases: ['sugg', 'sug', 's'],
   run: async (client, message, args) => {
      const channel = message.guild.channels.cache.get('875376226024435772')
      if (!channel) return message.channel.send('channel doesnt exist')

      let mArgs = args.join(' ')
      const embed = new discord.MessageEmbed()
         .setColor('ORANGE')
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .setTitle('New suggestion')
         .addField('The suggestion:', mArgs, true)
         .setTimestamp()

      channel.send(embed).then((msg) => {
         msg.react('✅')
         msg.react('❌')
         message.delete()
      }).catch((err) => {
         console.log(err)
      })
   }
}