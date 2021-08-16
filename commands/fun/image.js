const scraper = require('images-scraper')

const google = new scraper({
   puppeteer: {
      headless: true
   }
})

const discord = require('discord.js');

module.exports = {
   name: 'image',
   aliases: ["img"],
   run: async (client, message, args) => {
      const imgQuery = args.join(' ');
      if(!imgQuery) return message.channel.send(
         new discord.MessageEmbed()
         .setTitle('❌| What image you want to see?')
         .setColor('RANDOM')
      );

      const imgResult = await google.scrape(imgQuery, 1);
      message.channel.send(imgResult[0].url);
   }
}