const discord = require('discord.js');

module.exports = {
name: 'avatar',
aliases: ["avt", 'ava'],
run: async(client, message, args) => {
   const member = message.mentions.members.first() || message.member;
   
   message.channel.send(
      new discord.MessageEmbed()
      .setTitle(`${member.user.tag}'s avatar`)
      .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
      .setColor('RANDOM')
   )
}
}