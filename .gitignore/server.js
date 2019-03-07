const Discord = require('discord.js')
const prefix = "+"
const client = new Discord.Client()

client.on('message', message => {
     if(message.content === prefix + 'register') {
           message.member.setRoles(['553282040011816960'])
           message.channel.send('Vous êtes enregistré 📝')
     } 
})

client.on('ready', () => {
    client.user.setGame('Pré-inscription ouvertes: +register')
})

client.login(process.env.TOKEN) 
