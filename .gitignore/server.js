const Discord = require('discord.js')
const prefix = "+"
const client = new Discord.Client()


client.on('message', message => {
     
     
     if(message.content === prefix + 'register') {   
        const noEmbed = new Discord.RichEmbed() 
              .setColor('#e02c2c')
             .setDescription(`Oops! il n'y a plus de places disponibles.`)
        if(NdP.members.size === 12) return message.channel.send(noEmbed) 
          
        
        const NdP = message.guild.roles.find("name", "Participants")
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
              .setDescription('\:hypebot: \:LOYD: \:pandakano: \:sei: \:sushimaki: \:UMbrava: \:windeure: \:alorstoi: \:baz: \:friksou: \:hype:')
          message.channel.send(chooseEmbed).then(msg => {
               msg.react('553427795619872792')
               msg.react('553429050736115732')
               msg.react('553426481213210634')
               msg.react('553428335028469760')
               msg.react('553426928430874625') 
               msg.react('553428335028469760')
          })
     } 
})

client.on('ready', () => {
    client.user.setGame(`Pré-inscription ouvertes: +register 9 Places restantes`)
})

client.login(process.env.TOKEN) 
