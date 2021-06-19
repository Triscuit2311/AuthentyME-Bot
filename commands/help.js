const { prefix,admintag } = require('../config.json');



module.exports = {
    name: 'help',
    description: 'Get a list of all commands, or info on a single command.',
    aliases: ['commands'],
    usage: '~help <Optional: Command name>',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
		var normalizedTag = message.author.tag.toLowerCase();
		
        // Send help data about ALL commands
        if(!args.length) {

            data.push('\n\n');


			commands.forEach(command =>
			
			data.push(
			
			((command.adminonly && normalizedTag == admintag.toLowerCase()) || (!command.adminonly)) ? (
			
				
				(command.adminonly? '**[ADMIN ONLY]\n ' : '**' ) + prefix + command.name + '**\t·\t*' + command.description + '*\n' + //command name and desccription
				
				`>\t\t \` ${command.usage} \`` + // commmand useage in code block
				
				'\n'
			):(
			'**'+ prefix + command.name + '**\t·\t*Admin-Only Command*\n'
			)

			));


            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        // Send help data about the specific command
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }
		
		if(  (command.adminonly && normalizedTag == admintag.toLowerCase()) || (!command.adminonly) )
		{
		
			data.push(`**Name:** ${command.name}`);

			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description) data.push(`**Description:** ${command.description}`);
			if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

			data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
			
		}else{
			data.push('**'+ command.name + '** is an Admin-Only Command.\n');
		}

        message.channel.send(data, { split: true });
    },
};