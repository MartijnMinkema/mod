const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'ban',
   aliases: [""],
   run: async (client, message, args) => {
      if (!message.member.hasPermission("BAN_MEMBERS")) return 

      const mMember = message.mentions.members.first();
      let r = args.slice(1).join(" ");
      if (!r) r = "No reason given"

      const kEmbed = new MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .setTitle(`You are banned from**${message.guild.name}**`)
         .addField(`Reason: ${r}`)
         .setColor('RED')
         .setTimestamp(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))

      if (!args[0]) return message.channel.send(
         new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('❌| Who do you want to ban?')
            .setColor('RED')
            .setTimestamp()
      ).then(msg => {
         msg.delete({ timeout: 15000 })
         message.delete()
      });
      if (!mMember) return message.channel.send(
         new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('❌| This person doesnt exist or isnt in this server!')
            .setColor('RED')
            .setTimestamp()
      ).then(msg => {
         msg.delete({ timeout: 15000 })
         message.delete()
      });
      if (!mMember.bannable) return message.channel.send(
         new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('❌| I cant ban this person')
            .setColor('RED')
            .setTimestamp()
      ).then(msg => {
         msg.delete({ timeout: 15000 })
         message.delete()
      });

      await mMember.send(kEmbed)
      await mMember.ban({
         r: r
      }).then(() => message.channel.send(new MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .setTitle(`❌| ${mMember.user.tag} is succesfully banned!`)
         .setColor('RED')
         .setTimestamp()
      ).then(msg => {
         msg.delete({ timeout: 15000 })
         message.delete()
      }))
   }
}