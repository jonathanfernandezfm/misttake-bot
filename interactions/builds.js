const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds interaction',
	execute: async (interaction) => {
		const embed_caerleon = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '🐺 Builds para Caerleon outpost' })
			.setDescription('[EN CONSTRUCCIÓN]');
		// .setImage('https://i.imgur.com/2rrMlw8.png')
		// .setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_ganking = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '💀 Builds para Ganking' })
			.setDescription('[EN CONSTRUCCIÓN]');
		// .setImage('https://i.imgur.com/2rrMlw8.png')
		// .setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_zvz = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '⚔️ Builds para ZvZ' })
			.setDescription('[EN CONSTRUCCIÓN]');
		// .setImage('https://i.imgur.com/2rrMlw8.png')
		// .setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_roaming = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '☠️ Builds para roaming TANKE & MELEE' })
			.setDescription('[EN CONSTRUCCIÓN]');
		// .setImage('https://i.imgur.com/2rrMlw8.png')
		// .setFooter({ text: '📅 Última actualización 17/09/2022' });

		const embed_magos = new EmbedBuilder()
			.setColor(0x0099ff)
			.setAuthor({ name: '🧙‍♂️ Builds para magos' })
			.setDescription('[EN CONSTRUCCIÓN]');
		// .setImage('https://i.imgur.com/2rrMlw8.png')
		// .setFooter({ text: '📅 Última actualización 17/09/2022' });

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
					embeds: [embed_roaming],
				});
			case 'gank':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_ganking],
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
