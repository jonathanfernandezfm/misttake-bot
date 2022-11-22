const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Comando para crear un menú desplegable de builds',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('builds').setPlaceholder('Selecciona una opción').addOptions(
				{
					label: 'Caerleon',
					description: 'Captura de puestos avanzados rivales',
					value: 'caerleon',
					emoji: '🐺',
				},
				{
					label: 'ZvZ',
					description: 'Batallas a gran escala',
					value: 'zvz',
					emoji: '⚔️',
				},
				{
					label: 'Roaming',
					description: 'Objetivos en mundo abierto',
					value: 'roaming',
					emoji: '🐎',
				},
				{
					label: 'Magos',
					description: 'Captura de magos embotellados',
					value: 'magos',
					emoji: '🧙‍♂️',
				}
			)
		);

		const embed = new EmbedBuilder()
			.setTitle('ㅤㅤㅤ                           ❮❮    BUILDS    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor('#E9A6F2')
			.setDescription(
				'\n\n> `⚔️` Aquí encontrarás información importante sobre la composición de builds que usamos para cada actividad.\n\n> `⚠️` Para acceder a los apartados haz click en el menú de abajo para navegar entre las diferentes composiciones.\n'
			);
		// .setImage('https://i.imgur.com/KuyLm6D.png');

		await msg.channel.send({
			content: '',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
