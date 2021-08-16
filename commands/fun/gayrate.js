const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: 'gayrate',
   aliases: ["gay"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      let gayrate = Math.floor(Math.random() * 101)

      if(!user){
         let gayrateEmbed = new MessageEmbed()
         .setTitle('Gayrate Machine')
         .setColor('BLUE')
         .setDescription('You are `' + gayrate + "%` gay! 🏳‍🌈")
         .setFooter(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
         message.channel.send(gayrateEmbed).catch(e => {
            console.log(e)
         })
      } else {
         let gayEmbed = new MessageEmbed()
         .setTitle('Gayrate Machine')
         .setColor('BLUE')
         .setDescription(`${user.user.tag} is \`${gayrate}%\` gay! 🏳‍🌈`)
         .setFooter(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
         message.channel.send(gayEmbed).catch(e => {
            console.log(e)
         })
      }
   }
}