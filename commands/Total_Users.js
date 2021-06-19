const axios = require('axios')
const { AUTHENTY_API_KEY,AUTHENTY_APP_KEY } = require('../config.json');     // Loads the "token" and "prefix" values from the config file

module.exports = {
	adminonly: true,
    name: 'users',
    description: 'Requests the total number of active users we have.', 
    args: false, 
    usage: 'No arguments for this command.',
    execute(message, args) {
		/*-----------------------ADMIN CHECK--------------------------*/
		var normalizedTag = message.author.tag.toLowerCase();
		if( (module.exports.adminonly && normalizedTag == admintag.toLowerCase()) || (!module.exports.adminonly )){
			
		/*-----------------------COMMAND EXECUTION--------------------*/
		
		const params = new URLSearchParams()
		params.append('app_key', AUTHENTY_APP_KEY)
		params.append('api_key', AUTHENTY_API_KEY)
		params.append('type', 'totalusers')

		const config = {
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		  }
		}

		axios.post('https://biitez.dev/api/authenty/users/', params, config)
		  .then((result) => {
			console.log('Bot Retrived Total Users: ' + result.data.total_users + ' for user: ' + message.author.tag)
			message.reply('We have **' + result.data.total_users + '** active users.');
		  })
		  .catch((err) => {
			  console.log(err);
		  })
		  
		/*------------------------------------------------------------*/
		}else if(module.exports.adminonly && normalizedTag != admintag) 
		{
			message.reply(`${admintag} if the only one allowed to use this command.` );
			console.log(`${message.author.tag} attempted to use the admin only command: ${module.exports.name}`);
		}
		
    },
};