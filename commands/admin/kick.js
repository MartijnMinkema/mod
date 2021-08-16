const {Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
name: 'kick',
aliases: [""],
description: '', 
/**
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async(client, message, args) => {
   if(!message.member.hasPermission('KICK_MEMBERS')) return;

  let mentionMember = message.mentions.members.first();
  if(!mentionMember) {
      message.channel.send('pls mention member witch you need to kick');
      return;
  }

  //Get the highest role of user for compare
  let authorHighestRole = message.member.highestRole.position;
  let mentionHighestRole = mentionMember.highestRole.position;

  //If mention user have same or higher role, so show this error msg
  if(mentionHighestRole >= authorHighestRole) {
      message.channel.send('You can`t kick members with equal or higher position');
      return;
  };

  //Check if your bot can`t kick this user, so that show this error msg 
  if(!mentionMember.kickable) {
      message.channel.send('I have no permissions to kick this user');
      return
  };

  //If all steps are completed successfully try kick this user
  mentionMember.kick()
      .then(() => console.log(`Kicked ${member.displayName}`))
      .catch(console.error);
}
}