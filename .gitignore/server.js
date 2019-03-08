const Discord = require('discord.js')
const prefix = "+"
const client = new Discord.Client()

client.on('message', message => {
     if(message.content === prefix + 'register') {
           message.member.setRoles(['553282040011816960'])
        const NdP = message.guild.roles.find("name", "Participants")
           const registerEmbed = new Discord.RichEmbed()
                 .setColor('#e02c2c')
                 .setDescription(`Vous êtes enregistré 📝 ${NdP.members.size}/12`)
           message.channel.send(registerEmbed) 
     } 
     
     if(message.content === prefix + 'smash') {
          const Juge = message.author.id
          
          message.channel.send('Le premier qui dit SMASH pourra utiliser la boule <:smash:512000445791731718>')
          const filter = m => m.content.includes('SMASH') && m.author.id != '497101514079469569' 
          

          const collector = message.channel.createMessageCollector(filter, { time: 30000 });

          collector.on('collect', m => message.channel.send(`**${m.author.username}#${m.author.discriminator}** a attrapé la boule <:smash:512000445791731718>, il peut désormais l'utiliser. `));

          collector.on('end', collected => message.channel.send(`Temps écoulé`)) 

     } 
})

client.on('ready', () => {
    client.user.setGame('Pré-inscription ouvertes: +register')
})

client.login(process.env.TOKEN) 
