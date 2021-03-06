const {Client, Message, MessageEmbed} = require('discord.js');
const moment = require('moment')
const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
module.exports = {
   name: 'serverinfo',
   aliases: ["sinfo", 'si', 'server'],
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message) => {
      const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
      const members = message.guild.members.cache;
      const channels = message.guild.channels.cache;
      const emojis = message.guild.emojis.cache;

      const embed = new MessageEmbed()
      .setTitle(message.guild.name,'s server information')
      .setThumbnail(message.guild.iconURL({dynamic: true}))
      .setColor('BLUE')
      .addField('**General**', [
         `**❯ Name:** ${message.guild.name}`,
         `**❯ ID:** ${message.guild.id}`,
         `**❯ Owner:** ${message.guild.owner.user.tag}`,
         `**❯ Region:** ${message.guild.region}`,
         `**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
         `**❯ Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
         `**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LLL')} ${moment(message.guild.createdTimestamp).format('LLL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
         '\u200b'
      ])
      .addField('Statistics', [
         `**❯ Emoji Count:** ${emojis.size}`,
         `**❯ Regular Emoji Cont:** ${emojis.filter(emoji => !emoji.animated).size}`,
         `**❯ Animated Emoji Cont:** ${emojis.filter(emoji => emoji.animated).size}`,
         `**❯ Member Count:** ${message.guild.memberCount}`,
         `**❯ Humans:** ${members.filter(member => !member.user.bot).size}`,
         `**❯ Bots:** ${members.filter(member => member.user.bot).size}`,
         `**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
         `**❯ Voice Channels:** ${channels.filter(channel => channel.type ==='voice').size}`,
         `**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
         `**❯ Roles** ${roles.length - 1}`,
         '\u200b'
      ])
      .addField('Presence', [
         `**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
         `**❯ Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
         `**❯ Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
         `**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
         '\u200b'
      ])
      .setTimestamp();
   message.channel.send(embed)
   }
}