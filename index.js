const Discord = require ('discord.js');
const bot = new Discord.Client ();

const token = 'NTQ1MzUxODgwODIyMzU4MDQ5.D0YblA.tTKlwuf3ym7bLSeGT5YaSkW9Yo8';

const PREFIX = '-';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('Bot ONLINE.');
})

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'execute':
            message.channel.send('Not in order.')
        break;
        case "info":
            const embed = new Discord.RichEmbed()
            .setTitle ('Informations')
            .addField ('Server Owner', message.guild.owner.user.username)
            .addField('Current Server', message.guild)
            .addField('Bot Version', version)
            .setThumbnail(message.guild.owner.user.avatarURL)
            .setColor(0xF1C40F)
            message.channel.send(embed);
         break; 
        case 'clear':
            if(!args[1]) return message.reply('Error. Please define second arguement.')
            message.channel.bulkDelete(args[1])
        break;
        case 'links':
            message.channel.send('**Group: **https://www.roblox.com/groups/3265104/S-H-I-E-L-D-World-Protectors#!/about')
            message.channel.send('**Discord invite: **https://discord.gg/hE7rjdn')
        break;


    }
})

bot.login(token);
