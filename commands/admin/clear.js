const {Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
name: 'purge',
aliases: ["del", 'clear'],
/**
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async(client, message, args) => {
   const amount = parseInt(args[0]) + 1;

   if (isNaN(amount)) {
       return message.channel.send('Please Enter A Number.')
   } else if (amount <= 1 || amount > 100) {
       return message.channel.send('You Can Only Delete Messages From 1 To 99.')
   }

   message.channel.bulkDelete(amount, true).catch(err => {
       console.error(err);
       message.channel.send('There Was An Error Deleting Messages In This Cahnnel.')
   })
}
}