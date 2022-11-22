const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'roles',
	description: 'Roles',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('roles').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Roles más usados actualmente',
					value: 'rolesusados1',
					emoji: '🛡️',
				},
				{
					label: 'Requisitos para obtener rol',
					value: 'requisitos1',
					emoji: '📋',
				},
				{
					label: 'Reclamar rol de arma principal',
					value: 'reclamar1',
					emoji: '🎟️',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setTitle('ㅤㅤㅤ                 ❮❮    ROLES KYMERA    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor('#FF7A4D') //
			.setDescription(
				'\n\n> `🥋` Aquí encontrarás información esencial sobre los roles más utilizados actualmente en el gremio y las armas principales que cada integrante tiene al 100 de especialización.\n\n> `🔹` Con el tiempo los roles podrán variar en función de los cambios del juego, por si se añade o elimina alguno. \n\n> `⚔️` Si crees que cumples los requisitos para obtener un rol haz click en la tercera opción del menú para seguir con el proceso.\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n➡️ [ACCEDER AL EXCEL DE TODOS LOS ROLES](https://docs.google.com/spreadsheets/d/15PcYWGCbSi3bipMbkd4u2wctATJ4ZunRkNkgqD34fow/edit#gid=0)\n\n`📩` Contacta con un <@&1015944979136389190> o <@&1015942996455325719> para aparecer en la lista del gremio y asignarte el rol correspondiente.\n\n*(En esta lista solo aparecen armas principales de 100-120)*\n'
			)
			.setImage('https://i.imgur.com/MYpI7JX.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
