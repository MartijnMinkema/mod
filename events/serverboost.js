const client = require('../bot')

client.on('guildMemberUpdate', (oldMember, newMember) => {
   const oldStatus = oldMember.premiumSince
   const newStatus = newMember.premiumSince;

   if(!oldStatus && newStatus) {
      client.channels.cache.get('875369173897855006').send(`${newMember.user.tag} has just boost this server!`)
   }
   if(oldStatus && !newStatus) {
      client.channels.cache.get('875369173897855006').send(`${newMember.user.tag} has stopped boosting this server!`)
   }
})