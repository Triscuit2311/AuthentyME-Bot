const axios = require('axios')
const { AUTHENTY_API_KEY, AUTHENTY_APP_KEY, admintag, botname, embedcolor, prefix, embedimage } = require('../config.json');
const Discord = require('discord.js');
const errModule = require('../errorhandling');

module.exports = {
	adminonly: true,
    name: 'ban',
    description: 'Bans a specified user.', 
    args: true, 
    usage: '<username> <Optional: Reason>',
    execute(message, args) {
		/*-----------------------ADMIN CHECK--------------------------*/
		var normalizedTag = message.author.tag.toLowerCase();
		if( (module.exports.adminonly && normalizedTag == admintag.toLowerCase()) || (!module.exports.adminonly )){
			
		/*-----------------------COMMAND EXECUTION--------------------*/
		
		
			const params = new URLSearchParams()
			params.append('app_key', AUTHENTY_APP_KEY)
			params.append('api_key', AUTHENTY_API_KEY)
			
			params.append('user_to', args[0])
			params.append('type', 'ban')
			
			if(args.length>0)
			{
				var reason = message.content.replace(module.exports.name,'').replace(prefix,'').replace(args[0],'').concat(' [By: ' + message.author.tag +']');

				params.append('ban_reason', reason)
			}

			const config = {
			  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			  }
			}

			axios.post('https://biitez.dev/api/authenty/users/', params, config)
			  .then((result) => {


				  const embed = new Discord.MessageEmbed()
					  .setTitle(`${args[0]} has been banned successfully.`)
					  .addField("Reason",reason)
					  .setTimestamp()
					  .setFooter("Bot By Triscuit#1337")
					  .setAuthor(botname, embedimage)
					  .setThumbnail(embedimage)
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