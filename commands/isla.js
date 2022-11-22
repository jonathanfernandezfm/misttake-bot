const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'isla',
	description: 'Isla',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('isla').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Distribución de cofres personales',
					value: 'distribucion',
					emoji: '1022572341160587354',
				},
				{
					label: 'Sistema de repartición de loot',
					value: 'reparto',
					emoji: '1037148095160537109',
				},
				{
					label: 'Reclamar cofre personal',
					value: 'reclamar',
					emoji: '🎟️',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setTitle('ㅤㅤㅤ               ❮❮    ISLA BRIDGEWATCH    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor(3697893)
			.setDescription(
				'\n\n> `🏝️` Aquí encontrarás información esencial sobre nuestra isla (situada en Bridgewatch portal), los cofres personales de los integrantes de la guild y el sistema de reparto de loot.\n\n> `🎰` Para el reparto del loot hay disponible un cofre general donde todos los miembros que sean <@&1016043570773381190> en adelante podrán hacerlo sin necesidad de que haya un integrante del equipo de administración conectado.\n\n> `⚠️` Si aún no se te ha asignado un cofre personal, haz click en la opcion "Reclamar cofre personal" para abrir un ticket.\n'
			)
			.setImage('https://i.imgur.com/Uj5cgtx.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
