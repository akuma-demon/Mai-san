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
            let text = `*š°šš°šÆ'šÆšŖš¤š©šŖšøš¢*š°! *${M.sender.username}*\n\nā¢ćšš¶š¾ šš¶šššš¶šæš¾šš¶ć\nā¢*š'š® šš¢šŖ š“š¢šÆ š¢ š£š°šµ š¤š³š¦š¢šµš¦š„ š£šŗ š®šŗ š“š¦šÆš±š¢šŖ šµš° š®š¢š¬š¦ šŗš°š¶š³ šøš©š¢šµš“š¢š±š± š¦šÆš«š°šŗš¢š£š­š¦*\n\nāāā°ā¢š®š¶šššš¶šæš¾šš¶ļ½„ā±āā\n\nāćšš¦š¢š„ šµš©š¦ š³š¶š­š¦š“ćā\nššŗ šÆš¢š®š¦ šŖš“ šš¢šŖ-š“š¢šÆš°\n\nš¼š šæšš“šµšøš šøš /\n\n1 | *Don't Call* Bots to avoid Blocking.\n\n2 | *Don't Spam* in Groups to avoid Blocking\n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `āāā°š°šš°šµ ${this.emojis[keys.indexOf(key)]} ${this.client.util.capitalize(key)}ā¢š£ā±āā\nā¢ \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                     .join(', ')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted: M.WAMessage,

          mimetype: Mimetype.gif,


            caption: `${text}
 āāāā[ *š°šš¶š¾ šš¶šš°* ]āāāāā
āāāāāāāāāāāāāāšš£
ā   š° *š¬š°šÆ'šÆšŖš¤š©šŖšøš¢*
  šššššš šš šš ššššššššš
  https://www.instagram.com/akuma__24/
ā    š°*š®šøš©š«šš¼*š°
āāāāāāāāāāāāāāš£
āā[šššÆš šš«ššš­ ššš²]āā
š *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `š *Command:* ${this.client.util.capitalize(command.config?.command)}\nš *Status:* ${
                state ? 'Disabled' : 'Available'
            }\nā© *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\nā¦ļø *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\nš *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\nš *Usage:* ${command.config?.usage || ''}\n\nš *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['', '', '','', '', '', '', '', '', '', '', '']
}
