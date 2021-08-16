const ticketEasy = require('ticket.easy')
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'addmember',
   aliases: ["add"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const ticket = new ticketEasy()
      ticket.addMember({
         message: message,
         user: message.mentions.members.first()
      })
   }
}