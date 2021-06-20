# Authenty.ME Discord Bot

![AuthentyME-Bot](https://socialify.git.ci/Triscuit2311/AuthentyME-Bot/image?description=1&descriptionEditable=Discord%20bot%20for%20the%20Authenty.me%20auth%20platform.&font=Source%20Code%20Pro&language=1&owner=1&pattern=Diagonal%20Stripes&stargazers=1&theme=Dark)

A discord bot to help with user administration and license management for the AUthenty.ME platform.

## Features / Info

This bot has commands for both users (Password change, HWID reset) and more extensive controls for admins (User management, HWIDs, Licenses, etc.)

Error handling for all types of response errors.

Embeds for commands.

Commands with bad syntax will tell you how to use them (assuming you are the proper user group).

## Setting Up

### Dependencies

* Node.js installed on the system the bot will be running on.
* Text editor of your choice, Notepad++ / VSCode / whatever.
* Discord developer panel access.

### Installing

* Clone the repo.
* On windows Install_Packages.ps1 to install node.js, discord.js, and axios.
* On other systems:

```
$ npm install -g npm
$ npm install discord.js
$ npm install axios
```

### Setting up the Bot

* Open config.json
* Put your Bot's OAuth2 Token in the "token" variable.
* Put your discord tag in the "admin" variable.
* Put your Authenty API key (Biitez.dev user API Key) in the "AUTHENTY_API_KEY" 
* Put your Authenty APP key (APP Key from your application) in the "AUTHENTY_APP_KEY"
* (Optional) Bot command prefix can be changed in config.json.
* (Optional) Command permissions can be changed in each individial command script (./commands/xxx.js)

* To start your bot run:
```
$ node index.js
```
* On windows you can run Launch.ps1 or use the VS project to launch index.js with node tools.

## Discord Commands

Admin Commands:
```
 ~hwidreset    ·    Resets the HWID of a specified user.
 ~generatekeys ·    Generates License Keys.
 ~keydata      ·    Gets information about a specified key.
  
 ~users        ·    Requests the total number of active users we have.
 ~forcepassword·    Changes a specified user's password.
 ~pulluser     ·    Gets information about a specified user.
 
 ~ban          ·    Bans a specified user.
 ~unban        ·    Unbans a specified user.
```

User Commands:
```
~help          ·    Gets all commands availiable to the requesting user. Can also get information for a single command.
~newhwid       ·    Resets the HWID of the user who sent the command.
~changepassword·    Changes your password.
```

## Authors

 Triscuit2311


## License

This project is licensed under the MIT License - see the LICENSE.md file for details

