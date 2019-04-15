const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '+';

var gameData = {
     active: false
} 

var p1 = {
		name: 'Rien', 
		tag: 'Rien',
		id: 'Rien',
		avatar: 'Rien',
		character: 'Rien',
		inscrit: false,
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
	

client.on('ready', () => {
    client.user.setGame('Vous êtes sur le module secondaire') 
			

    client.user.setStatus('dnd')
	console.log('Yes my body was ready.')
	
})

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
	
    



    try {
        delete require.cache[require.resolve(`./${cmd}.js`)]
        let commandFile = require(`./${cmd}.js`)
        commandFile.run(client, message, args, gameData, p1,p2);
    } catch (e) {
        console.log(e.stack)
    }
});

client.login(process.env.TOKEN)
