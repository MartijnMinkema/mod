const { Client, Message, MessageEmbed, Guild } = require('discord.js');

module.exports = {
   name: 'poll',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      let pollChannel = message.guild.channels.cache.get('871818589223665734')
      let pollDescription = args.join(' ');

      let embedPoll = new MessageEmbed()
         .setTitle('😲 New Poll! 😲')
         .setDescription(pollDescription)
         .setColor('YELLOW')
      let msgEmbed = await pollChannel.send(embedPoll);
      await msgEmbed.react('👍')
      await msgEmbed.react('👎')
   }
}