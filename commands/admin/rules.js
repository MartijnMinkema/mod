const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'rules',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if(!message.member.hasPermission('ADMINISTRATOR')) return;
      const embed = new MessageEmbed()
      .setTitle('RULES FOR GAR')
      .setDescription(`**Section 1 Ingame rules**
      \n→ Have respect for everyone.
      \n → Don't spam in the chats.
      \n→ Don't randomly kill civilians.
      \n→ Don't advertise.
      \n→ No racist, homophobic, sexist comments
      \n→ Don't swear
      \n→ Don't abuse perms.
      \n
      **Section 2 Discord rules**
      \n→ Don't spam in the chats
      \n→ Don't ping LED
      \n→ Don't swear
      \n→ Use chats for what they must be used
      \n→ You can tease without going to extremes
      \n→ Use grammar in on-topic
      \n→ No NSFW
      \n→ If there is a reason you need to contant a LED then do it in DM
      \n→ No racist, homophobic, sexist comments
      \n→ You're nickname must be your roblox name or rank
      \n→ All those rulse count in VC aswell
      \n→ No earrape in VC
      \n→ Follow the discord TOS and guidelines
      \n\n→ If there is a problem you can DM Martijn#1113`)
      .setColor('#22bcc7')
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setThumbnail(message.guild.iconURL)
      .setTimestamp()
      message.channel.send(embed)
   }
}