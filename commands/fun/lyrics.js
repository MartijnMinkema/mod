const { Client, Message, MessageEmbed, DiscordAPIError } = require('discord.js');
const lyrics = require('lyrics-finder')
module.exports = {
   name: 'lyrics',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {

      let singer
      let song
      let pages = []
      let current = 0

      const filter = msg => msg.author.id == message.author.id
      let options = {
         max: 1
      };
      message.channel.send('Q 1/2:\n\nWho is the singer?')
      let col = await message.channel.awaitMessages(filter, options)
      if (col.first().content == 'cancel') return message.channel.send('Cancelled')
      singer = col.first().content

      message.channel.send('Q 2/2:\n\n What is the name of the song')
      let col2 = await message.channel.awaitMessages(filter, options)
      if (col2.first().content == 'cancel') return message.channel.send('Cancelled')
      song = col2.first().content
      
      let res = await lyrics(singer, song) || 'Not found'

      for (let i = 0; i < res.length; i+= 2048) {
         let lyrics = res.substring(i, Math.min(res.length, i + 2048))
         let page = new MessageEmbed()
         .setDescription(lyrics)
         pages.push(page)
      }

      const filter2 = (reaction, user) => ['◀', '▶'].includes(reaction.emoji.name) && (message.author.id == user.id)
      const Embed = await message.channel.send(`Page: ${current+1}/${pages.length}`, pages[current])
      await Embed.react('◀')
      await Embed.react('▶')

      const reactionCol = Embed.createReactionCollector(filter2)
      
      reactionCol.on('collect', (reaction, user) => {
         if(reaction.emoji.name === '◀'){
            if(current !== 0) {
               current -= 1
               Embed.edit(`Page: ${current+1}/${pages.length}`, pages[current])
            }
         } else {
            if(reaction.emoji.name === '▶') {
               if(current < pages.length - 1){
                  current += 1
                  Embed.edit(`Page: ${current+1}/${pages.length}`, pages[current])
               }
            }
         }
      })
   
   }
}