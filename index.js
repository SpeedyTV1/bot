const Discord = require ('discord.js');
const bot = new Discord.Client ();

var version = '1.0.0';
const PREFIX = '-';
var password = '5581';

bot.on('ready', () =>{
    console.log('Bot ONLINE.')
    
bot.user.setStatus('idle') //Status here

bot.user.setActivity('Status: Maintenance | -cmds')

});

bot.on('message', message=>{

    let arguement = message.content.substring(PREFIX.lenght).split(" ");
    //Commands starts here
    switch(arguement[0].toLowerCase()){
        case '-cmds':
            const embed1 = new Discord.RichEmbed()
            .setTitle('Commands')
            .addField('-info', 'Shows info about the server and the bot.')
            .addField('-links', 'Displays the group link and Discord invite code.')
            .addField('-clear [n]', 'Clears inserted ammount of messages including the command.')
            //.addField('-training', 'Announces a training.')
            .addField('-file [name]', 'Shows info a file.')
            .setColor(0x0FF1DC)
            message.channel.send(embed1);
        break;
        //case '-execute':
            //message.channel.send('Not in order.')
        //break;
        case "-info":
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
        case '-clear':
            if(!args[1]) return message.reply('Error. Please define second arguement.')
            message.channel.bulkDelete(args[1])
        break;
        case '-links':
            message.channel.send('**Group: **https://www.roblox.com/groups/3265104/S-H-I-E-L-D-World-Protectors#!/about')
            message.channel.send('**Discord invite: **https://discord.gg/hE7rjdn')
        break;
        //case '-training':
           // message.channel.send('')
        //break;
        //case 'database':
           //if(args[1] === password){
                //const embed2 = new Discord.RichEmbed()
                //.setTitle('Database')
                //.addField('Director', 'SpeedyTV_1')
               // .addField('Secretary', 'fggggfbnf')
               // .addField('Deputyy Director', 'JordySpero')
              //  .setColor(0xF1C40F)
             //   message.channel.send(embed2);
           // }else{
          //      message.channel.send('Invalid Password.')
          //  }
      //  break;
        case '-file':
            if(args[1] === 'Theta_Protocol'){
                message.channel.send('https://marvelcinematicuniverse.fandom.com/wiki/Theta_Protocol')
                console.log(message.author.username + ' has accessed Theta Protocol File.')
            }else{
                message.channel.send('Invalid File')
            }
        break;
        case '-maintenance':
        if(message.author.id === '249912319633522690'){
            bot.user.setStatus('idle')
            bot.user.setActivity('Status: Maintenance | -cmds')
            message.channel.send('Status: Maintenance')
        }else{
            message.channel.search('Insufficient permissions.')
        }
        break;
        case '-online':
        if(message.author.id === '249912319633522690'){
            bot.user.setStatus('Online')
            bot.user.setActivity('Status: Online | -cmds')
            message.channel.send('Status: Online')
        }else{
            message.channel.send('Insufficient permissions.')
        }
        break;
    }
});

bot.login(process.env.token);
