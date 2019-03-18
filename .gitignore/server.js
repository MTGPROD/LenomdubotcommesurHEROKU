const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '+';

var gameData = {
     game: false
}

var playersData = {
	Player1 = {
		name: message.author.username
		discriminator: message.author.discriminator
		id: message.author.id
		avatar: message.author.avatarURL
		character: 'Aucun'
		inscrit: true 
    }, 
    
    Player2 = {
    	name: 'Rien'
        discriminator: 'Rien'
        id: 'Rien'
        avatar: 'Rien'
        character: 'Rien'
        incrit: false
    }
}

client.on('ready', () => {
    client.user.setGame('Veuillez vous inscrire avant Avril | +register')
    client.user.setStatus('dnd')
})

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {
        delete require.cache[require.resolve(`./cmds/${cmd}.js`)]
        let commandFile = require(`./cmds/${cmd}.js`)
        commandFile.run(client, message, args, gameData, playersData);
    } catch (e) {
        console.log(e.stack)
    }
});

client.login(process.env.TOKEN)