const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
   name: '8b',
   aliases: ["8ball"],
   description: '',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client, message, args) => {
      if (!args[0]) return message.channel.send('Please ask a question')

      let replies = [
         "Without a doubt.", "It is certain.", "It is decidedly so.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Signs point to yes.", "Ask again later.", "Reply hazy try again.", "Try again later.", "Better not tell you now.",
         "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.",
         "Very doubtful.", "Yes.", "No.", "Yep.", "Nope.", "y35.", "n0.", "Only the prophecy will tell.", "Who cares? We all die in the end.",
         "Isn't it obvious?", "Obviously, yes.", "Yes, duh?", "I don't think so, no.", "Who gives a fuck?", "You wish.", "Is this a joke?", "Ask me if I care.",
         "Fuck do I know, I'm just a magic ball.", "No God, please, no.", "Just google it.", "Bitch, I don't know your life.", "Google might have the answer.",
         "Help! I'm trapped!", "Perhaps.", "Maybe, just maybe.", "You bet!", "Grow up and make your own decisions, idiot.", "Trust me, you don't want to know.",
         "No Ron.", "Ask Michael.", "Hell if I know.", "Barely possible.", "It's a secret to everybody.", "It depends.", "Don't take my word for it.",
         "Yeah, right.", "Sure, if you think so.", "In your dreams.", "Sounds good to me.", "Not yet.", "Probably.", "Very likely.", "Very unlikely.",
         "Not advisable.", "Give it time.", "When the planets align.", "You already know the answer to that.", "Maybe, in a few weeks, if you're lucky.",
         "Never in a million years, maybe in fewer.", "It smells like it.", "Possibly, but possibly it is impossible.", "They didn't allow me to tell you.",
         "No fucking way.", "Oh hell no!", "Kill them, kill all of them.", "Anything is possible.", "In theory, yes.", "I don't even know what to answer you.",
         "I don't know and I don't care.", "The answer is C.", "Ask me again tomorrow.", "I strongly believe so.", "It looks like it.",
         "I wouldn't worry about it.", "Go fish.", "NEXT QUESTION!", "yo that sounds lit fam", "Don't let your dreams be dreams.", "Follow your heart, I wouldn't trust your mind though.",
         "Sure, why not?", "Just ask yourself: \"Would John Cena do it?\"", "JUST DO IT!", "I might know the answer, but maybe a bribe can help me remember better...",
         "It depends, does it give you EXP?", "I rolled a dice to answer you, and it said the answer is C.", "\"Anything is possible.\" Said the blind boy as it proceeded to walk into a pit.",
         "42.", "It ain't worth it, m8.", "Would it make life better?", "Why are we still here?", "No! Think of the children!", "please save me she's forcing me to lie",
         "Short answer: Yes. Long answer: No.", "It all depends if you have a good kda ratio.", "I don't know, can a match box?",
         "If Leo won the Oscar and we got Finding Nemo 2, It's probably possible.", "What could possibly go wrong?", "What's the worse that could happen?", "Ah, I see you're an entity of culture as well.",
         "You should ask that bitch Alexa.", "You should ask that bitch Cortana.", "You should ask Siri, that slut."
      ]

      let result = Math.floor(Math.random() * replies.length)
      let question = args.slice().join(' ')

      const ballEmbed = new MessageEmbed()
         .setTitle(`🎱${message.author.tag} asked a question🎱`)
         .setColor('#17ABF0')
         .addField('Question', question)
         .addField('Answer', replies[result])

      message.channel.send(ballEmbed)
   }
}