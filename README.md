# Authenty.ME Discord Bot

A discord bot to help with user administration and license management for the AUthenty.ME platform.

## Features / Info

This bot has commands for both users (Password change, HWID reset) and more extensive controls for admins (User management, HWIDs, Licenses, etc.)

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
* On windows you can run Launch.ps1

## Discord Commands

Admin Commands:
```
 ~hwidreset    ·    Resets the HWID of a specified user.
 ~generatekeys ·    Generates License Keys.
 ~users        ·    Requests the total number of active users we have.
 ~ban          ·    Bans a specified user.
 ~forcepassword·    Changes a specified user's password.
 ~pulluser     ·    Gets information about a specified user.
~changepassword·    Changes your password.
 ~unban        ·    Unbans a specified user.
```

User Commands:
```
~newhwid       ·    Resets the HWID of the user who sent the command.
~changepassword·    Changes your password.
```

## Authors

 Triscuit2311

## Version History

* 1.0 - Initial release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

