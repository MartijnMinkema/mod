const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const levels = require('discord-xp')
const canvacord = require('canvacord')
module.exports = {
   name: 'level',
   aliases: ["lvl", 'rank'],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const target = message.mentions.users.first() || message.author

      const user = await levels.fetch(target.id, message.guild.id)

      if (!user) return message.channel.send(`It seems like this user hasn't earned any xp so far`)

      const neededXP = levels.xpFor(parseInt(user.level) + 1)

      const img = "https://astrotourismwa.com.au/wp-content/uploads/2018/12/Milky-Way-Galaxy-1080x675.jpg"

      const rank = new canvacord.Rank()
         .setAvatar(target.displayAvatarURL({format: 'png', dynamic: true}))
         .setCurrentXP(user.xp)
         .setBackground("IMAGE", img)
         .setRank(1, 'RANK', false)
         .setLevel(user.level)
         .setRequiredXP(neededXP)
         .setStatus(target.presence.status)
         .setProgressBar("#7fe9f5", "COLOR")
         .setUsername(target.username)
         .setDiscriminator(target.discriminator);

      rank.build()
         .then(data => {
            const attachment = new MessageAttachment(data, "RankCard.png");
            message.channel.send(attachment);
         });
   }
}