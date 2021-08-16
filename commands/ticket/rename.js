const {Client, Message, MessageEmbed} = require('discord.js');
const ticketEasy = require('ticket.easy')
module.exports = {
name: 'rename',
aliases: [""],
description: '', 
/**
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async(client, message, args) => {
   const ticket = new ticketEasy()
   ticket.renameTicket({
      message: message,
      name: "newname"
   })
}
}