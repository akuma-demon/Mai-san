import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hidetag",
			description: "hidden tag all users in group chat",
			aliases: ["offset", ",", "ht"],
			category: "moderation",
			usage: `${client.config.prefix}hidetag`,
			adminOnly: true,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		const stickers = [
			"https://i.ibb.co/5KKtkBg/cb72e121-69b9-4d1d-aa13-226266e3d05a.jpg",
			"https://i.ibb.co/0y4rd63/on-Twitter.jpg",
			"https://i.ibb.co/SrZDXd8/a250671b-ddf2-4f7e-839d-61fd0fa0c77a.jpg",
			"https://i.ibb.co/DC4GBwQ/image.jpg",
			"https://i.ibb.co/SmQpc7L/some-mai-pics-i-did-3.jpg",
			"https://i.ibb.co/MfNhyYS/animati-animepictur.jpg",
		];
		const option = ["--s", "--sticker"];
		const random = stickers[Math.floor(Math.random() * stickers.length)];
		const tem = joined.trim();
                        if (!joined)
			return void (await M.reply(
				`${tem}`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
		const term = joined.trim();
		if (!option.includes(term))
			return void (await M.reply(
				`${term}`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
		const sticker: any = await new Sticker(random, {
			pack: "READ QUOTED MESSAGE",
			author: "AKUMA",
			quality: 90,
			type: "full",
			categories: ["🎊"],
		});
		return void (await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,
			M.groupMetadata?.participants.map((user) => user.jid)
		));
	};
}
