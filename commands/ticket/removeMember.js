const ticketEasy = require('ticket.easy')
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'removemember',
   aliases: ["remove"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      const ticket = new ticketEasy()
      ticket.removeMember({
         message: message,
         user: message.mentions.members.first()
      })
   }
}