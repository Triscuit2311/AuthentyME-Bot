const axios = require('axios')
const { AUTHENTY_API_KEY, AUTHENTY_APP_KEY, admintag, botname, prefix } = require('../config.json');     

const errModule = require('../errorhandling');


module.exports = {
	adminonly: true,
    name: 'test',
    description: 'for testing', 
    args: false, 
    usage: '',
    execute(message, args) {
		/*-----------------------ADMIN CHECK--------------------------*/
		var normalizedTag = message.author.tag.toLowerCase();
		if( (module.exports.adminonly && normalizedTag == admintag.toLowerCase()) || (!module.exports.adminonly )){
			
		/*-----------------------COMMAND EXECUTION--------------------*/
		
            message.channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: botname,
                        icon_url: 'https://i.ibb.co/qmj3d5m/httpsbiitezdev.png'
                    },
                    title: "Request Success",
                //    url: "http://google.com",
                    description: "Big Doinks",
                    fields: [{
                        name: "Fields",
                        value: "They can have different fields with small headlines."
                    },
                    {
                        name: "Masked links",
                        value: "You can put [masked links](http://google.com) inside of rich embeds."
                    },
                    {
                        name: "Markdown",
                        value: "You can put all the *usual* **__Markdown__** inside of them."
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: 'https://i.ibb.co/qmj3d5m/httpsbiitezdev.png',
                        text: "Bot By Triscuit#1337"
                    }
                }
            });




















		/*------------------------------------------------------------*/
		}else if(module.exports.adminonly && normalizedTag != admintag) 
		{
			message.reply(`${admintag} if the only one allowed to use this command.` );
			console.log(`${message.author.tag} attempted to use the admin only command: ${module.exports.name}`);
		}

    },
};