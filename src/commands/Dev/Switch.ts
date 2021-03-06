import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "switch",
      description: "Switches the bot",
      category: "dev",
      usage: `${client.config.prefix}switch <bot_name>`,
      modsOnly: true,
      baseXp: 0,
    });
  }

  run = async (
    M: ISimplifiedMessage,
    { joined }: IParsedArgs
  ): Promise<void> => {
    const bot = await (await this.client.getGroupData(M.from)).bot;
    const i = joined.trim();
    if (!joined || i === "all") {
      await this.client.DB.group.updateOne(
        { jid: M.from },
        { $set: { bot: "all" } }
      );
      return void M.reply(`π°ππΆπΎ ππΆππ°* is active now.`);
    }
    if (i === bot) {
      if (this.client.user.name === i)
        return void M.reply(`π¨ *I am already active*.`);
      else if (this.client.user.name !== i)
        return void M.reply(`π¨ *${i}* is already active.`);
    }
    await this.client.DB.group.updateOne({ jid: M.from }, { $set: { bot: i } });
    if (i === this.client.user.name)
      return void M.reply(`π© *I am now active*.`);
    else await M.reply(`π© *${i}* is now active.`);
  };
}
