const Discord = require('discord.js')
const prefix = "+"
const client = new Discord.Client()

client.on('message', message => {
     if(message.content === prefix + 'register') {
           message.member.setRoles(['553282040011816960'])
           message.channel.send('Vous êtes enregistré 📝')
     } 
     
     if(message.content === prefix + 'smash') {
          const Juge = message.author.id
          
          message.channel.send('Le premier qui dit SMASH pourra utiliser la boule <:smash:512000445791731718>')
          const filter = m => m.content.includes('SMASH');

          const collector = message.channel.createMessageCollector(filter, { time: 30000 });

          collector.on('collect', m => if(m.author.id === '497101514079469569') return; message.channel.send(`**${m.author}** a attrapé la boule <:smash:512000445791731718>, il peut désormais l'utiliser. `));

          collector.on('end', collected => message.channel.send(`Temps écoulé, personne récupère la boule`))
     } 
})

client.on('ready', () => {
    client.user.setGame('Pré-inscription ouvertes: +register')
})

client.login(process.env.TOKEN) 
