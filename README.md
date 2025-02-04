<div align="center">

# discord-antiraid
Discord.js extention library for protect discord servers against Raids

[![downloadsBadge](https://img.shields.io/npm/dt/discord-antiraid?style=for-the-badge)](https://npmjs.com/discord-antiraid)
[![versionBadge](https://img.shields.io/npm/v/discord-antiraid?style=for-the-badge)](https://npmjs.com/discord-antiraid)

<br>

[![discord](https://discord.com/api/guilds/848500695506223104/widget.png)](https://discord.gg/ahjFrbk2Nr)
[![GitHub license](https://img.shields.io/github/license/Derpinou/discord-antiraid.svg)](https://github.com/Derpinou/discord-antiraid/blob/master/LICENSE)

</div>

## - Installation:
```

npm i discord-antiraid

```


Supported Events:
(If you want to Add your Own Events, Use AntiRaid Class Methods in the documentation or follow Example [here](https://github.com/Derpinou/discord-antiraid/blob/main/example/AntiRaid/Event.js))

```js
    channelCreate
    channelDelete
 
    roleCreate
    roleDelete
 
    guildBanAdd
    guildMemberRemove
```

Create AntiRaid:
(Example: [here](https://github.com/Derpinou/discord-antiraid/blob/main/example/AntiRaid/sample.js))

```js
const {AntiRaid} = require('discord-antiraid');

const antiraid = new AntiRaid(client, {
    rateLimit: 3,
    time: 10000,
    ban: true,
    kick: false,
    unrank: false,
    exemptMembers: [],
    exemptRoles: [],
    exemptEvent: [],
    reason: "discord-antiraid"
})

```
Using Database (Example with [quick.db](https://www.npmjs.com/package/quick.db)):
(Example: [here](https://github.com/Derpinou/discord-antiraid/blob/main/example/AntiRaid/quickdb.js))

```js
const Discord = require('discord.js'),
    {AntiRaid} = require('discord-antiraid'),
    client = new Discord.Client(),
    db = require('quick.db');


//Extend AntiRaid class for edit save(id: String, cooldown: []) and getOptionsFromDB(id: String) with your db methods

class AntiRaidWithDB extends AntiRaid {

    //AntiRaid.save is Optional

    async save(id, cooldown) {
        db.set(`cooldown_${id}`, cooldown)
    }

    //If the bot is public on several guilds and each guilds must have its own antiraid configuration

    async getOptionsFromDB(id) {
        return db.get(`antiraid_${id}`)
    }
}
const antiraid = new AntiRaidWithDB(client, {
    rateLimit: 3,
    time: 10000,
    ban: true,
    kick: false,
    unrank: false,
    exemptMembers: [],
    exemptRoles: [],
    exemptEvent: [],
    reason: "discord-antiraid"
})
```




Use discord-antiraid events:

```js
antiraid.on("punish", (member, reason, sanction) => {
    member.guild.channels.cache.get("848500695506223107").send(`${member.user.username} got banned for raid attempt`)
})
```

Get package version:
```js
const {version} = require('discord-antiraid');
console.log(version);
//Output: 2.0.0
```

## - Changelog:

See Changelog [here](https://github.com/Derpinou/discord-antiraid/blob/main/CHANGELOG.md)


## - Contributors:
<a href="https://github.com/Derpinou">
  <img width="50px" style ="border-radius:7px;" src="https://avatars.githubusercontent.com/u/60037058?v=4" />
</a>
<a href="https://github.com/Sayrix">
  <img width="50px" style ="border-radius:7px;" src="https://avatars.githubusercontent.com/u/43046854?v=4" />
</a>
<a href="https://github.com/Androz2091">
  <img width="50px" style ="border-radius:7px;" src="https://avatars.githubusercontent.com/u/42497995?v=4" />
</a>

## - Special Credits:
Thanks to [Androz](https://github.com/Androz2091) with his repo [discord-giveaways](https://github.com/Androz2091/discord-giveaways) for doc generator and typing example

Thanks to [Sayrix](https://github.com/Sayrix) for making the logo and the banner

## - License:

Licensed under the MIT license.