const { MessageEmbed } = require('discord.js');
const discord = require('discord.js')
const ticketEasy = require('ticket.easy')
module.exports = {
   name: 'create',
   aliases: ["new"],
   run: async (client, message, args) => {
      const ticket = new ticketEasy()

      ticket.createTicket({
         message: message,
         supportRole: "Happy",
         ticketMessage: `${message.author} created a ticket yay`, 
         ticketTopic: `${message.author.id}`,
         ticketParent: "", 
         ticketName: "",
      })
   }
}