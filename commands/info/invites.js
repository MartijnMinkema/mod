const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'invites',
   aliases: ["inv"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      let user = message.mentions.users.first() || message.author
      let invites = await message.guild.fetchInvites();
      let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

      if(userInv.size <= 0) {
         return message.channel.send('This user has no invites')
      }

      let i = 0
      userInv.forEach(inv => i += inv.uses)

      const embed = new MessageEmbed()
      .setTitle(`${user.tag} Invites`)
      .addField('User Invites:', i)
      .setColor('RANDOM')
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
      message.channel.send(embed)

   }
}