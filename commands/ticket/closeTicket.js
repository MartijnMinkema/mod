const ticketEasy = require('ticket.easy')
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'close',
   aliases: ["delete"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const ticket = new ticketEasy()
      ticket.closeTicket({
         message: message,
         supportRole: "User",
      })
   }
}