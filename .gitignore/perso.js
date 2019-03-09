const Discord = require('discord.js')

exports.run = (message, client, args) => {
     if(args[0] === 'Captain Hype') {
               const charEmbedHype = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL)
                    .setTitle('Informations supplémentaires pour Captain Hype')
                    .setDescription('"Sucite l\'Engouement"')
                    .addField(`Poids`, `350% (Lourd)`)
                    .addField(`Attaque verte`, `Canon laser (35%)`, true)
                    .addField(`Attaque rouge`, `Coup (30%)`, true)
                    .addField(`Attaque blue`, `HYPE PUNCH (40%) `, true) 
                    .addField(`Talent`, `**Recharge:** A 1/10 de pouvoir Smash par tour.`)
                    .addField(`<:smash:512000445791731718>`, `Laser Jauvert (60%)`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/437664075099668482/493154301779378187/V3.png')
               message.channel.send(charEmbedHype)
          } 
} 
