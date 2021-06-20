const axios = require('axios')
const { AUTHENTY_API_KEY, AUTHENTY_APP_KEY, admintag, botname, embedcolor, prefix } = require('../config.json');     
const errModule = require('../errorhandling');
const Discord = require('discord.js');

module.exports = {
	adminonly: true,
    name: 'pulluser',
    description: 'Gets information about a specified user.', 
    args: true, 
    usage: '<username>',
    execute(message, args) {
		/*-----------------------ADMIN CHECK--------------------------*/
		var normalizedTag = message.author.tag.toLowerCase();
		if( (module.exports.adminonly && normalizedTag == admintag.toLowerCase()) || (!module.exports.adminonly )){
			
		/*-----------------------COMMAND EXECUTION--------------------*/
		
		
			const params = new URLSearchParams()
			params.append('app_key', AUTHENTY_APP_KEY)
			params.append('api_key', AUTHENTY_API_KEY)
			
			params.append('user_to', args[0])
			params.append('type', 'user_information')

			const config = {
			  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			  }
			}

			axios.post('https://biitez.dev/api/authenty/users/', params, config)
			  .then((result) => {


				  const embed = new Discord.MessageEmbed()
					  .setTitle(`Data Request for user [${result.data.username}]`)
					  .setTimestamp()
					  .setFooter("Bot By Triscuit#1337")
					  .setAuthor(botname, 'https://i.ibb.co/qmj3d5m/httpsbiitezdev.png')
					  .addField("User Data",
						  `->**Status:** ` + (result.data.isbanned ? 'Banned' : 'Active') +
						  `\n->**HWID:** ${result.data.hwid}\n` +
						  `->**Email:** ${result.data.email}\n` +
						  `->**Last IP:** ${result.data.lastipaddress}\n` +
						  `->**Last Login:** ${result.data.lastlogin}\n`
					  )
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