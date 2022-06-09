import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    🐰𝒮𝐸𝒩𝒫𝒜𝐼🐰
        
       *🐰𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘨𝘳𝘰𝘶𝘱:🐰* *https://chat.whatsapp.com/EeIT4nf7PBUD8Kwbm4FgJC:*
        *🐰𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘮𝘺 𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮🐰:*https://www.instagram.com/akuma__24/*`,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/c2015e5bb8f3bed47a986.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the group Link in personal message \n` }
        )

        }
}
