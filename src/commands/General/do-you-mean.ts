import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/d24e109f6abf309edaa60.mp4'
        ]
        let lucy = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: lucy }, MessageType.video, {
            quoted: M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝘉𝘢𝘬𝘬𝘢, 𝘉𝘢𝘬𝘬𝘢. *${M.sender.username}!* 𝘜𝘴𝘦🐰*${this.client.config.prefix}𝘩𝘦𝘭𝘱*? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
