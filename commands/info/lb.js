const { Client, Message, MessageEmbed } = require('discord.js');
const levels = require('discord-xp')

module.exports = {
   name: 'leaderboard',
   aliases: ["lb"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const rawLeaderboard = await levels.fetchLeaderboard(message.guild.id, 10)

      if(rawLeaderboard.length < 1) return message.channel.send(`Nobody's in leaderboard yet`)

      const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard, true)

      const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`)

      message.channel.send(`**Leaderboard**\n\n${lb.join("\n\n")}`)
   }
}                                                                                                                       