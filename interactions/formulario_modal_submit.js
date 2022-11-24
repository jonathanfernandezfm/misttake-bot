const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { canal_formulario, rol_espera, rol_reclutador } = require('../data/db.json');
const { request } = require('undici');

module.exports = {
	name: 'formulario_modal',
	description: 'Formulario modal submit',
	execute: async (interaction) => {
		const nombre = interaction.fields.getTextInputValue('pregunta_nombre');
		const playerResult = request(`https://gameinfo.albiononline.com/api/gameinfo/search?q=${nombre}`);

		const horario = interaction.fields.getTextInputValue('pregunta_horario');
		const contenido = interaction.fields.getTextInputValue('pregunta_contenido');
		const guild = interaction.fields.getTextInputValue('pregunta_guild');
		const rol = interaction.fields.getTextInputValue('pregunta_rol');

		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder().setCustomId('aceptar_formulario').setLabel('Aceptar').setStyle(ButtonStyle.Success),
			new ButtonBuilder().setCustomId('denegar_formulario').setLabel('Denegar').setStyle(ButtonStyle.Danger)
		);

		const playerBody = await (await playerResult).body.json();
		if (!playerBody.players[0]) {
			return interaction.reply({
				content:
					'❌ Tu personaje no se encuentra en Albion. Si crees que es correcto, contacta con un reclutador, administrador o Poak',
				ephemeral: true,
			});
		}
		const playerId = playerBody.players[0].Id;
		const playerDataResult = await request(`https://gameinfo.albiononline.com/api/gameinfo/players/${playerId}`);
		const playerDataBody = await playerDataResult.body.json();
		const totalFame =
			playerDataBody.KillFame +
			playerDataBody.LifetimeStatistics.PvE.Total +
			playerDataBody.LifetimeStatistics.Crafting.Total +
			playerDataBody.LifetimeStatistics.Gathering.All.Total;

		const embed = new EmbedBuilder()
			.setColor('#ffca38')
			.setTitle('📝 Nuevo formulario de ingreso')
			.setDescription(`👤 Usuario en Discord: <@${interaction.user.id}>\nㅤ\n`)
			.setThumbnail(interaction.user.displayAvatarURL())
			.addFields(
				{ name: '1) Nombre de usuario en Albion:', value: `> ${nombre}` },
				{ name: '2) ¿Resides en España?:', value: `> ${horario}` },
				{ name: '3) ¿Qué contenido quieres hacer en MistTake?:', value: `> ${contenido}` },
				{ name: '4) ¿Cuál es tu anterior gremio?:', value: `> ${guild}` },
				{ name: '5) Rol principal, secundario y armas usadas/spec:', value: `> ${rol}` },
				{ name: 'Fama estimada PvP + PvE', value: `> ${(totalFame / 10 ** 6).toFixed(2)} M` }
			);

		const [person, channel] = await Promise.all([
			interaction.guild.members.fetch(interaction.user.id),
			interaction.guild.channels.fetch(canal_formulario),
		]);

		person.roles.add(rol_espera);
		if (interaction.user.id !== interaction.guild.ownerId) person.setNickname(nombre);

		await Promise.all([
			channel.send({
				content: `> <@&${rol_reclutador}>, nuevo formulario de <@${interaction.user.id}>`,
				embeds: [embed],
				components: [row],
			}),
			interaction.reply({
				content: '`✅` Tu formulario ha sido enviado correctamente a nuestro equipo de reclutadores',
				ephemeral: true,
			}),
		]);

		return;
	},
};
