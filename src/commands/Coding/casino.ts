import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'casino',
            aliases: ['support,casino'],
            description: 'Gets the group links',
            category: 'extras',
            usage: `${client.config.prefix}casino`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*๐ฐCasino Group๐ฐ*\n\n
                 *๐ฐ๐๐ถ๐พ ๐๐ถ๐: Fun Group:https://chat.whatsapp.com/EeIT4nf7PBUD8Kwbm4FgJC\n\n
                 *๐ฐ๐๐ถ๐พ ๐๐ถ๐ ๐ข๐ถ๐๐ท๐๐พ๐๐: ๐๐ฎ๐๐ถ๐ป๐ผ *:https://chat.whatsapp.com/EeIT4nf7PBUD8Kwbm4FgJC `,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/DEBVzQIAjWwAAAPo/mai-sakurajima.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Send you the support group links in Personal Message\n` }
        )

        }
}
