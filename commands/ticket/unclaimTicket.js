const { MessageEmbed } = require('discord.js');
const discord = require('discord.js')
const ticketEasy = require('ticket.easy')
module.exports = {
   name: 'unclaim',
   aliases: [],
   run: async (client, message, args) => {
      const ticket = new ticketEasy()

      ticket.unclaimTicket({
         message: message,  //The way you defined message in the message event
         supportRole: "User", //Support role, can be an ID and the role name
      })
   }
}