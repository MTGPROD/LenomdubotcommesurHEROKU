const Discord = require('discord.js')
const prefix = "+"
const client = new Discord.Client()

client.on('message', message => {
     if(message.content === prefix + 'register') {
           message.member.setRoles(['553282040011816960'])
           message.channel.send('Vous êtes enregistré 📝')
     } 
})

client.login('NDk3MTAxNTE0MDc5NDY5NTY5.D2LH9Q.VzOjWWhYx6avzT3aY5bLIIi3STg') 
