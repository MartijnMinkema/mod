const { Client, Message, MessageEmbed } = require('discord.js');
const weather = require('weather-js')
module.exports = {
   name: 'weather',
   aliases: [""],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      weather.find({ search: args.join(" "), degreeType: `C` }, function (error, result) {
         if (error) return message.channel.send(error)
         if (!args[0]) return message.channel.send('Please specify a location!')

         if (result === undefined || result.length === 0) return message.channel.send(`**Inavlid** location!`)

         var current = result[0].current
         var location = result[0].location

         try {
            let embed = new MessageEmbed()
               .setTitle(`Weather - ${result[0].location.name}`)
               .setColor('#17ABF0')
               .setDescription("Temperature units can may be differ some time")
               .addField("❯ Temperature", `${current.temperature} Celcius`, true)
               .addField("❯ Sky Text", current.skytext, true)
               .addField("❯ Humidity", current.humidity, true)
               .addField("❯ Timezone", `UTC${location.timezone}`, true) //Shows the timezone
               .addField("❯ Feels like", `${current.feelslike} Degrees`, true)
               .addField("❯ Degree Type", location.degreetype, true) //Shows the degrees in Celcius
               .addField("❯ Observation Time", current.observationtime, true)
               .addField("❯ Wind Display", current.winddisplay, true)
               .addField("❯ Day", `${current.day}`, true)
               .addField("❯ Date", `${current.date}`, true)

               .setThumbnail(current.imageUrl);
            message.channel.send(embed);
         } catch (err) {
            console.log(err)
         }
      })
   }
}