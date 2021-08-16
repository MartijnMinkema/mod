const discord = require('discord.js');
const math = require('mathjs');
module.exports = {
   name: 'math',
   aliases: ["m"],
   run: async (client, message, args) => {
         message.channel.send(
            new discord.MessageEmbed()
               .addField('Question', args.join(" "))
               .addField('Solution', math.evaluate(args.join(" ")))
               .setColor()
         )
   }
}