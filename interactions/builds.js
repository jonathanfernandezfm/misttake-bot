const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds interaction',
	execute: async (interaction) => {
		const embed_caerleon = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '🐺 Builds para Caerleon outpost' })
			.setDescription('Haz click en Abrir original')
			.setImage('https://i.imgur.com/2rrMlw8.png')
			.setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_zvz = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '⚔️ Builds para ZvZ' })
			.setDescription('Haz click en Abrir original')
			.setImage('https://i.imgur.com/JwAF1zV.jpg')
			.setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_roaming1 = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '☠️ Builds para roaming TANKE & MELEE' })
			.setDescription('Haz click en Abrir original')
			.setImage('https://cdn.discordapp.com/attachments/1015933855359836181/1021819456223199292/tanks_mele.png')
			.setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_roaming2 = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '☠️ Builds para roaming HEAL & SUPPORT & RANGE' })
			.setDescription('Haz click en Abrir original')
			.setImage(
				'https://cdn.discordapp.com/attachments/1015933855359836181/1021819476968222810/supports_healers.png'
			)
			.setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_magos = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '🧙‍♂️ Builds para magos' })
			.setDescription('Haz click en Abrir original')
			.setImage('https://media.discordapp.net/attachments/1009895511450452099/1009895543977283594/unknown.png')
			.setFooter({ text: '📅 Última actualización 17/09/2022' });

		switch (interaction.values[0]) {
			case 'caerleon':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_caerleon],
				});
			case 'zvz':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_zvz],
				});
			case 'roaming':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_roaming1, embed_roaming2],
				});
			case 'magos':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_magos],
				});
			default:
				return;
		}
	},
};
