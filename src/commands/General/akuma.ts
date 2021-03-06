import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'akuma',
            description: 'Displays info about akuma.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://i.ibb.co/dmzybNS/mai-sakurajima-wallpaper-size-1080-by-1920.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `๐ฐ๐๐ ๐ฎ๐๐๐๐ถ๐พ!โ๏ธI'm ๐๐๐๐๐ an ordinary guy who loves watching anime & play games๐ฎ. I'm a BCA Student๐คrelationship with ๐๐๐๐๐ค  
            
๐ฐ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ;
Wa.me/+917892202052

๐ฐ๐๐๐๐๐๐จ๐จ๐ค;
https://facebook.com/groups/600441174428472/
 
๐ฐ๐๐ง๐ฌ๐ญ๐๐ ๐ซ๐๐ฆ;
https://www.instagram.com/akuma__24/
 
โชผ๐ฒ๐พ๐พ ๐๐บ๐ ๐ฐ` }
        )
    }
}
