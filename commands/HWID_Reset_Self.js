const axios = require('axios')
const { AUTHENTY_API_KEY,AUTHENTY_APP_KEY } = require('../config.json');     // Loads the "token" and "prefix" values from the config file

module.exports = {
	adminonly: false,
    name: 'newhwid',
    description: 'Resets the HWID of the user who sent the command.', 
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
		
		params.append('user_to', message.author.username)
		params.append('type', 'reset')

		const config = {
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		  }
		}

		axios.post('https://biitez.dev/api/authenty/hwid/', params, config)
		  .then((result) => {
			message.reply(`your HWID has been reset successfully.` );
		  })
		  .catch((err) => {
			  console.log(err);
			  let errormsg= myModule.handle(err);
				  message.reply(errormsg);
		  })
		  
		
		/*-----------------------ADMIN CHECK--------------------------*/
		}else if(module.exports.adminonly && normalizedTag != admintag) 
		{
			message.reply(`${admintag} if the only one allowed to use this command.` );
			console.log(`${message.author.tag} attempted to use the admin only command: ${module.exports.name}`);
		}
		
    },
};