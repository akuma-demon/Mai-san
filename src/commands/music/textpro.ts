import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'extras',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/KpNg7EV75q0AAAPo/mai-sakurajima.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Creation 🄻🄸🅂🅃💙🌟
──────────────
🔮 ${this.client.config.prefix}tneon
🔮 ${this.client.config.prefix}greenneon
🔮 ${this.client.config.prefix}tech
🔮 ${this.client.config.prefix}lovewall
🔮 ${this.client.config.prefix}devil
🔮 ${this.client.config.prefix}thunder
🔮 ${this.client.config.prefix}glitch
🔮 ${this.client.config.prefix}horror
🔮 ${this.client.config.prefix}cloud
🔮 ${this.client.config.prefix}firework
🔮 ${this.client.config.prefix}blood
🔮 ${this.client.config.prefix}loveneon
🔮 ${this.client.config.prefix}advanceglow
🔮 ${this.client.config.prefix}graffiti
💙 ${this.client.config.prefix}snow
💙 ${this.client.config.prefix}snowc
💙𝐄𝐍𝐉𝐎𝐘_ 𝐌𝐚𝐝𝐞 𝐛𝐲 𝐀𝐊𝐔𝐌𝐀
┌────────────┈❅
│
│   🐰 *𝑀𝒶𝒾 𝓈𝒶𝓃🐰*
│
│   *𝐀𝐊𝐔𝐌𝐀*🐰
│
└────────────┈⁂

❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
──────────────` }
        )
    }
}
