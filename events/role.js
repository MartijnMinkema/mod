const client = require('../bot')
const discord = require('discord.js')
client.on('guildMemberAdd', member => {
   if (member.guild.id === '875409957409918996') {
      console.log('User:' + member.user.username + 'hasjoind the server')
      var role = member.guild.roles.cache.find(role9 => role9.id === '875410228848500847')
      member.roles.add(role)
   }
})
client.on('guildMemberAdd', member => {
   if (member.guild.id === '875376824589381632') {
      console.log('User:' + member.user.username + 'hasjoind the server')
      var role = member.guild.roles.cache.find(role9 => role9.id === '875409957409918996')
      member.roles.add(role)
   }
})
client.on('guildMemberAdd', member => {
   if (member.guild.id === '875407161553989682') {
      console.log('User:' + member.user.username + 'hasjoind the server')
      var role = member.guild.roles.cache.find(role9 => role9.id === '875376824589381632')
      member.roles.add(role)
   }
})