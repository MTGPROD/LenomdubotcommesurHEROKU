const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '+';




client.on('ready', () => {
    client.user.setGame('Veuillez vous inscrire avant Avril | +register')
    client.user.setStatus('dnd')
})

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
	var gameData = {
     game: false
}

var p1 = {
		name: message.author.username, 
		tag: message.author.discriminator,
		id: message.author.id,
		avatar: message.author.avatarURL,
		character: 'Aucun',
		inscrit: true,
        pourcent: '0%' 
    }
    
var p2 = {
    	name: 'Rien', 
        tag: 'Rien',
        id: 'Rien',
        avatar: 'Rien',
        character: 'Rien',
        inscrit: false, 
        pourcent: '0%'
    }
	
    try {
        delete require.cache[require.resolve(`./cmds/${cmd}.js`)]
        let commandFile = require(`./cmds/${cmd}.js`)
        commandFile.run(client, message, args, gameData, p1,p2);
    } catch (e) {
        console.log(e.stack)
    }
});

client.login(process.env.TOKEN)
