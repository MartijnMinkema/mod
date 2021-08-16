const ticketEasy = require('ticket.easy')
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'claim',
   aliases: [],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const ticket = new ticketEasy()
      ticket.claimTicket({
         message: message,
         supportRole: "User"
      })
   }
}