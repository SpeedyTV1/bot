const Discord = require ('discord.js');
const bot = new Discord.Client ();

const PREFIX = '-';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('Bot ONLINE.')
    
bot.user.setStatus('Online') //Status here

bot.user.setActivity('Prefix: - | -cmds')

});

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");
    //Commands starts here
    switch(args[0]){
        case 'cmds':
            const embed1 = new Discord.RichEmbed()
            .setTitle('Commands')
            .addField('-info', 'Shows info about the server and the bot.')
            .addField('-links', 'Displays the group link and Discord invite code.')
            .addField('-clear [n]', 'Clears inserted ammount of messages including the command.')
            .setColor(0x0FF1DC)
            message.channel.send(embed1);
        break;
        case 'execute':
            message.channel.send('Not in order.')
        break;
        case "info":
            const embed = new Discord.RichEmbed()
            .setTitle('Informations')
            .addField('Server Owner', message.guild.owner.user.username)
            .addField('Current Server', message.guild)
            .addField('Bot Version', version)
            .addField('Bot Prefix', '-')
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
        case 'training':
             message.channel.send('**Training**')
             message.channel.send('Training is being hosted at: https://web.roblox.com/games/1618842457/x')
             message.channel.send('Host: ', '@', message.author.username)
        break;


    }
})

bot.login(process.env.token);
