const Discord = require ('discord.js');
const bot = new Discord.Client ();

var version = '1.0.0';
const PREFIX = '-';
var password = '5581';
const ownerid = '249912319633522690';
const coownerid = '242531824830644224';

bot.on('ready', () =>{
    console.log('Bot ONLINE.')
    
bot.user.setStatus('Online') //Status here

bot.user.setActivity('Status: Online | -cmds')

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenght).split(" ");
    //Commands starts here
    switch(args[0].toLowerCase()){
        case '-cmds':
            const embed1 = new Discord.RichEmbed()
            .setTitle('Commands')
            .addField('-info', 'Shows info about the server and the bot.')
            .addField('-links', 'Displays the group link and Discord invite code.')
            .addField('-clear [n]', 'Clears inserted ammount of messages including the command.')
            //.addField('-training', 'Announces a training.')
            .addField('-file [name]', 'Shows info a file.')
            .addField('-online', 'Sets status to online. Bot owner only.')
            .addField('-maintenance', 'Sets status to maintenance. Bot owner only.')
            .addField('-files', 'Shows list of all files.')
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
            message.channel.send('**L0 Trainee application: **https://goo.gl/forms/AAABqEJXv1HnPBiu2')
            message.channel.send('**Website: **https://romanpolak5000.wixsite.com/shield')
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
             if(args[1] === 'P.E.G.A.S.U.S.'){
                message.channel.send('https://marvelcinematicuniverse.fandom.com/wiki/Project_P.E.G.A.S.U.S.')
                console.log(message.author.username + ' has accessed Project P.E.G.A.S.U.S. File.') 
            }else{
             if(args[1] === 'Captain_Marvel'){
                message.channel.send('In 1995, Agents Nick Fury and Phil Coulson were sent to investigate a mysterious woman, who had apparently crashed on Earth. The woman claimed to be Vers, a Kree warrior who tried to stop the shape-shifting Skrulls from taking over the planet. Fury encountered some of the Skrulls, after he followed Vers pursuit after one of them and killed a Skrull who impersonated Coulson. Fury located Vers and together they learned about her origin on Earth as a pilot who had helped the Kree Mar-Vell in testing a Light-Speed Engine. However they had to run from the Skrull Talos who impersonated Director Keller.Fury and Veres visited Maria Rambeau, a friend of Verse at her time on Earth, who helped her learn her real name, Carol Danvers. Talos tracked them down but he revealed that he only want to find a new home for his people and that the Kree army was after the source of the Light-Speed Engine. Fury, Danvers, Rambeau, Talos and the Flerken Goose flew to Mar-Vells laboratory in space, where they found the Light-Speed Engine source, the Tesseract, and Talos people. However the Kree found them, so as Danvers fought their army, Fury and the rest returned to Earth with the Tesseract and the Skrulls. Danvers eventually made the Kree retreat.Fury was asked by Danvers to keep the Tesseract while she would find for the Skrulls a new home and try to end the Kree-Skrull War. Before she left, she gave back to Fury his Transmitter Pager, now capable of calling Danvers galaxies away in case of emergency.')
                console.log(message.author.username + ' has accessed Captain_Marvel File.')    
            }else{
             if(args[1] === 'KREE'){
                message.channel.send('The Kree are a scientifically and technologically advanced militaristic race of mostly blue-skinned humanoids from the planet Hala. One of the most technologically efficient races in the galaxy, the Kree have special emphasis placed on their skills in genetic engineering. They are a powerful force in the galaxy that control a vast empire characterized by its militaristic lifestyle, advanced technology, and arrogance.')
                console.log(message.author.username + ' has accessed KREE File.')
            }else{
             if(args[1] === 'Project_Quinjet'){
                message.channel.send('The Quinjet is a technologically advanced S.H.I.E.L.D. jet frequently used by the Avengers and STRIKE teams for transportation. Quinjets possess unique flight capabilities thanks to their unique wings which contain turbine fans. While most early Quinjets were lightly armed, S.H.I.E.L.D. initiative known as Project Insight introduced a series of Quinjets with a wider range of weapons.')
                console.log(message.author.username + ' has accessed Quinjet File.')
            }else{
                message.channel.send('Invalid File')
            }
        }
    }
            }
            }
        break;
        case '-maintenance':
        if(message.author.id === ownerid, coownerid){
            bot.user.setStatus('idle')
            bot.user.setActivity('Status: Maintenance | -cmds')
            message.channel.send('Status: Maintenance')
            console.log('Status: Maintenance')
        }else{
            message.channel.send('Insufficient permissions.')
        }
        break;
        case '-online':
        if(message.author.id === ownerid, coownerid){
            bot.user.setStatus('Online')
            bot.user.setActivity('Status: Online | -cmds')
            message.channel.send('Status: Online')
            console.log('Status: Online')
        }else{
            message.channel.send('Insufficient permissions.')
        }
        break;
        case '-files':
            message.channel.send('Theta_Protocol\nP.E.G.A.S.U.S.\nCaptain_Marvel\nKREE\nProject_Quinjet')
        break;
        case '-test':
        if(message.author.id === ownerid, coownerid){
            message.channel.send('Bot working.\nnew line test')
        }else{
            message.channel.send('Insufficient permissions.')
        }
        break;
    }
});

bot.login(process.env.token);
