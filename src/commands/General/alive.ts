import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
                        command: "alive",
                        aliases: ["Jinda?", "oi", "kahaho"],
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}alive`,
			baseXp: 10,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/c2015e5bb8f3bed47a986.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `𝘣𝘢𝘬𝘬𝘢. 𝘣𝘢𝘬𝘬𝘢. 𝘣𝘢𝘬𝘬𝘢 \n\n 𝘪'𝘮 𝘢𝘭𝘸𝘢𝘺𝘴 𝘢𝘤𝘵𝘪𝘷𝘦🐰. 🐰\n` }
        )
    }
}
   
