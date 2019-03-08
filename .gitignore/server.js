const Discord = require('discord.js')
const prefix = "+"
const client = new Discord.Client()


client.on('message', message => {
     
     
     if(message.content === prefix + 'register') {   
        const noEmbed = new Discord.RichEmbed() 
              .setColor('#e02c2c')
             .setDescription(`Oops! il n'y a plus de places disponibles.`)
        const NdP = message.guild.roles.find("name", "Participants")
        if(NdP.members.size === 12) return message.channel.send(noEmbed) 
          
        
        
        message.member.setRoles(['553282040011816960'])
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
     
     if(message.content === prefix + 'choose') { 
          const chooseEmbed = new Discord.RichEmbed()
              .setTitle('Choisissez un personnage') 
              .setDescription('<:windertet:553525987950854144> <:makitet:553426481213210634> <:friksoutet:553429050736115732> <:engouebottet:553428607687589910> <:baztet:553428335028469760> <:kmktet:553426928430874625> <:Seitet:553525775001976872> <:kevtet:553526639733112857> <:hypetet:553427795619872792> <:pandetet:553544534089269309>')
          message.channel.send(chooseEmbed).then(msg => {
               msg.react('553427795619872792')
               msg.react('553429050736115732')
               msg.react('553426481213210634')
               msg.react('553428335028469760')
               msg.react('553426928430874625') 
               msg.react('553428335028469760')
               msg.react('553544534089269309')
               msg.react('553525775001976872')
               msg.react('553428607687589910')
               msg.react('553526202007027727')
               msg.react('553525987950854144')
               msg.react('553526639733112857')
               
               const filter = (reaction, user) => reaction.emoji.id === '553427795619872792' && user.id != '497101514079469569'
               const collector = msg.createReactionCollector(filter, { time: 15000 });
               collector.on('collect', r => msg.channel.send(`**${r.author.username}** a choisi **Captain Hype**`));
               collector.on('end', collected => console.log(`Collected ${collected.size} items`));
          })
     } 
})

client.on('ready', () => {
    client.user.setGame(`Pré-inscription ouvertes: +register 9 Places restantes`)
})

client.login(process.env.TOKEN) 
