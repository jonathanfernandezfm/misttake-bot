const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'rangos',
	description: 'Rangos',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('rangos').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Rangos administrativos',
					value: 'distribucion',
					emoji: '1038183225350180954',
				},
				{
					label: 'Rangos de miembros',
					value: 'reparto',
					emoji: '1038183335589060661',
				},
				{
					label: 'Vacantes disponibles',
					value: 'reclamar',
					emoji: '🗳',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setTitle('ㅤㅤㅤ               ❮❮    RANGOS KYMERA    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor(3697893)
			.setDescription(
				'\n\n> `🥇` Aquí encontrarás información esencial sobre los rangos representativos de nuestro gremio.\n\n> `👑` Para entender el funcionamiento interno de Kymera es necesario que conozcas el trabajo que realiza cada rango.\n\n> `⚠️` Para acceder a los apartados haz click en el menú de abajo para navegar entre las diferentes opciones.\n'
			)
			.setImage('https://i.imgur.com/fDDXqn0.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
