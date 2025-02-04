module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async run (guild, user) {
        let exempt = false,
            event = __filename.split(require('path').sep)[__filename.split(require('path').sep).length - 1].replace('.js', ""),
            check = false,
            startAt = Date.now();
        try {
            guild.fetchAuditLogs({type: "MEMBER_BAN_ADD"}).then(audit => audit.entries.first()).then(async entry => {
                if (user.id !== entry.target.id) return undefined;
                let member = guild.members.cache.get(entry.executor.id),
                    obje = await this.client.search(member, event);
                exempt = await this.client.checkExempt(member, event);
                if (!exempt) {
                    check = await this.client.checkCase(member, event, obje);
                    if (check) {
                        return this.client.punish(member);
                    }
                }
                await this.client.addCase(member, event, obje, startAt);
            });
        } catch (e) {}
    }
}
