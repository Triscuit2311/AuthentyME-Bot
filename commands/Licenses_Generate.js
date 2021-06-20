const axios = require('axios')
const { AUTHENTY_API_KEY, AUTHENTY_APP_KEY, admintag, botname, embedcolor, prefix } = require('../config.json');     
const errModule = require('../errorhandling');
const Discord = require('discord.js');

module.exports = {
	adminonly: true,
    name: 'generatekeys',
    description: 'Generates License Keys.', 
    args: true, 
    usage: '<amount> <days> <level> <Optional: Format>',
    execute(message, args) {
		/*-----------------------ADMIN CHECK--------------------------*/
		var normalizedTag = message.author.tag.toLowerCase();
		if( (module.exports.adminonly && normalizedTag == admintag.toLowerCase()) || (!module.exports.adminonly )){
			
		/*-----------------------COMMAND EXECUTION--------------------*/
		
		
			const params = new URLSearchParams()
			params.append('app_key', AUTHENTY_APP_KEY)
			params.append('api_key', AUTHENTY_API_KEY)
			params.append('type', 'generate')
			params.append('amount', args[0]);
			params.append('days', args[1]);
			params.append('level', args[2]);
			
			if(args.length>3){
				params.append('format', args[3]);
			}
			

			const config = {
			  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			  }
			}

			axios.post('https://biitez.dev/api/authenty/licenses/', params, config)
			
			  .then((result) => {
				  

				var str = '\`\`\`';
				result.data.licenses.forEach(function(index){
					str += `${index}\n`;
				});
				  str += '\`\`\`';
				  const embed = new Discord.MessageEmbed()
					  .setTitle(`Sucessfully generated ${args[0]} keys.`)
					  .setDescription(`**Time:** ${args[1]} Day\n**Level:** ${args[2]}`)
					  .setTimestamp()
					  .setFooter("Bot By Triscuit#1337")
					  .setAuthor(botname, 'https://i.ibb.co/qmj3d5m/httpsbiitezdev.png')
					  .addField("Keys", str)
					  .setThumbnail("https://i.ibb.co/qmj3d5m/httpsbiitezdev.png")
					  .setColor(embedcolor)
					  message.channel.send(embed)


			  })
			  .catch((err) => {
				  console.log(err);
				  let errormsg= errModule.handle(err);
				  message.reply(errormsg);
			  })
				

		/*------------------------------------------------------------*/
		}else if(module.exports.adminonly && normalizedTag != admintag) 
		{
			message.reply(`${admintag} if the only one allowed to use this command.` );
			console.log(`${message.author.tag} attempted to use the admin only command: ${module.exports.name}`);
		}
		
    },
};