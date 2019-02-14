const Disc = require('discord.js');
const client = new Disc.Client();
const token = 'NTQ1MzUxODgwODIyMzU4MDQ5.D0YblA.tTKlwuf3ym7bLSeGT5YaSkW9Yo8' //Make a bot and get it's token paste it here!!
const readline = require('readline');


client.login(token);

client.on('message', function(message){
    if(message.channel.type === 'dm'){
        console.log("[" + message.author.username + "]: " + message.content) //Message from : Message
        
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
  
        rl.question('REPLY TO ' + message.author.username + ': ', (answer) => {
        message.author.send(`${answer}`);
        rl.close();
     });
     }
});