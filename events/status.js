const client = require('../bot')
const statusArray = [
   'Watching over GAR',
   'prefix is g!',
   'g!help for help',
   'My maker is Martijn#1113',
   `I'm a better robot then R2D2`
];

let index = 0;
setInterval(() => {
   if (index === statusArray.length) index = 0;
   const status = statusArray[index];
   client.user.setActivity(status, { type: 'PLAYING' }).catch(console.error)
   index++;
}, 6000)
