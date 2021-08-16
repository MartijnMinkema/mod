const client = require('../bot')
const Canvas = require('canvas')
const { MessageAttachment } = require('discord.js');
var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif'
welcomeCanvas.context.fillStyle = '#ffffff'

Canvas.loadImage("https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80").then(async (img) => {
   welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
   welcomeCanvas.context.fillText('Welcome', 360, 360)
   welcomeCanvas.context.beginPath()
   welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
   welcomeCanvas.context.stroke()
   welcomeCanvas.context.fill()
})

client.on('guildMemberAdd', async member => {
   const welcomeChannel = client.channels.cache.get('875363855642017885')
   let canvas = welcomeCanvas;
   canvas.context.font = '42px sans-serif'
   canvas.context.textAlign = 'center'
   canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
   canvas.context.font = '32px sans serif'
   canvas.context.fillText(`You are the ${member.guild.memberCount}th`, 512, 455)
   canvas.context.beginPath()
   canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
   canvas.context.closePath()
   canvas.context.clip()
   await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024 }))
      .then(img => {
         canvas.context.drawImage(img, 393, 47, 238, 238)
      })

   let atta = new MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
   try {
      welcomeChannel.send(`:wave: Hello ${member}, welcome to ${member.guild.name}!`, atta)
   } catch (error) {
      console.log(error)
   }
})

