import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "party",
      aliases: ["party"],
      description: "Will display user's pokemon party",
      category: "pokemon",
      usage: `${client.config.prefix}party`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const data = await (await this.client.getUser(M.sender.jid)).party;
    const user = M.sender.jid;
    let username = user === M.sender.jid ? M.sender.username : "";
    if (!username) {
      const contact = this.client.getContact(user);
      username =
        contact.notify || contact.vname || contact.name || user.split("@")[0];
    }
    if (data.length < 1)
      return void M.reply(`You don't have any pokemon in your party.`);
    let text = `*πͺ ${username}'s Party*\n\n`;
    for (let i = 0; i < data.length; i++) {
      text += `*#${i + 1} π§§ Name: ${this.client.util.capitalize(
        data[i].name
      )}*\n\t\tπ *Pokedex Id: ${data[i].id}*\n\t\tπ« *Level: ${
        data[i].level
      }*\n\n`;
    }
    const buttons = [
      {
        buttonId: "pc",
        buttonText: { displayText: `${this.client.config.prefix}pc` },
        type: 1,
      },
    ];
    interface buttonMessage {
      contentText: string;
      footerText: string;
      buttons: string[];
      headerType: number;
    }
    const buttonMessage: any = {
      contentText: `${text}`,
      footerText: "π°ππΆπΎ ππΆππ°",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
