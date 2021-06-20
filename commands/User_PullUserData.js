const axios = require('axios')
const { AUTHENTY_API_KEY,AUTHENTY_APP_KEY,admintag,prefix } = require('../config.json');     // Loads the "token" and "prefix" values from the config file

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
				message.reply(
				`User Data for ${result.data.username}:\n`+
				`\tEmail: ${result.data.email}\n`+
				`\tHWID: ${result.data.hwid}\n`+
				`\tlast IP: ${result.data.lastipaddress}\n`+
				`\tlast Login: ${result.data.lastlogin}\n`
				);
			  })
			  .catch((err) => {
				  console.log(err);
				  let errormsg= myModule.handle(err);
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