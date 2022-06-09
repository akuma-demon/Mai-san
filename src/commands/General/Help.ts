import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h','menu']
        })
    }

     run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
           const n = [
           'https://telegra.ph/file/68054093b01c008dfc58f.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'general') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `*🐰𝘒𝘰𝘯'𝘯𝘪𝘤𝘩𝘪𝘸𝘢*🐰! *${M.sender.username}*\n\n•『𝑀𝒶𝒾 𝓈𝒶𝓀𝓊𝓇𝒶𝒿𝒾𝓂𝒶』\n•*𝘐'𝘮 𝘔𝘢𝘪 𝘴𝘢𝘯 𝘢 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘮𝘺 𝘴𝘦𝘯𝘱𝘢𝘪 𝘵𝘰 𝘮𝘢𝘬𝘦 𝘺𝘰𝘶𝘳 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘦𝘯𝘫𝘰𝘺𝘢𝘣𝘭𝘦*\n\n━━❰•𝒮𝒶𝓀𝓊𝓇𝒶𝒿𝒾𝓂𝒶･❱━━\n\n╚『𝘙𝘦𝘢𝘥 𝘵𝘩𝘦 𝘳𝘶𝘭𝘦𝘴』╝\n𝘔𝘺 𝘯𝘢𝘮𝘦 𝘪𝘴 𝘔𝘢𝘪-𝘴𝘢𝘯🐰\n\n🅼🆈 🅿🆁🅴🅵🅸🆇 🅸🆂 /\n\n1 | *Don't Call* Bots to avoid Blocking.\n\n2 | *Don't Spam* in Groups to avoid Blocking\n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `╚━❰🐰𝘉𝘰𝘵 ${this.emojis[keys.indexOf(key)]} ${this.client.util.capitalize(key)}•𖣘❱━╝\n• \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                     .join(', ')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted: M.WAMessage,

          mimetype: Mimetype.gif,


            caption: `${text}
 ──❅┈[ *🐰𝑀𝒶𝒾 𝓈𝒶𝓃🐰* ]┈❅───
┌────────────┈𑁍𖣘
│   🐰 *𝘬𝘰𝘯'𝘯𝘪𝘤𝘩𝘪𝘸𝘢*
  𝘍𝘖𝘓𝘓𝘖𝘞 𝘔𝘌 𝘖𝘕 𝘐𝘕𝘚𝘛𝘈𝘎𝘙𝘈𝘔
  https://www.instagram.com/akuma__24/
│    🐰*𝒮𝐸𝒩𝒫𝒜𝐼*🐰
└────────────┈𖣘
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
📝 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🚀 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n🎐 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['', '', '','', '', '', '', '', '', '', '', '']
}
