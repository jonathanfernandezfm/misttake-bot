const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'informacion',
	description: 'Informacion',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('informacion').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Objetivos de la season',
					value: 'objectives',
					emoji: '🎯',
				},
				{
					label: 'Facción Caerleon',
					value: 'fac_caerleon',
					emoji: '🐺',
				},
				{
					label: 'Hideout',
					value: 'hideout',
					emoji: '1037691104960725013',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setTitle('ㅤㅤㅤ         ❮❮    BIENVENIDO A KYMERA    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor('386CE5')
			.setDescription(
				'\n\n> `🌐` Aquí encontrarás información esencial sobre el contenido que realizamos, objetivos de season, zona por la que nos movemos, hideout y puntos importantes a tener en cuenta.\n\n> `🏰` Actualmente nuestro contenido se enfoca en el portal de __**Bridgewatch**__. Podrás acceder a la isla privada del gremio mediante el viajante en la pestaña **"Kymera Bridgewatch"**.\n\n> `⚠️` Para ver los diferentes apartados que hay disponible actualmente, haz click en el menú desplegable de abajo.\n'
			)
			.setImage('https://i.imgur.com/EkOZeZT.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
