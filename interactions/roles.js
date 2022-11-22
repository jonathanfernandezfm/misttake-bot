const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'roles',
	description: 'Roles interaction',
	execute: async (interaction) => {
		const embed_rolesusados1 = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                       ❮❮    ROLES MÁS USADOS    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('#FF7A4D') //
			.setDescription('`🌍 Roles más usados actualmente en Open World`')
			.addFields(
				{
					name: 'MAZAS',
					value: '> <@&1022200428114489374>\n> <@&1022200656414658590>\n> <@&1022200864905113680> \n> <@&1022200978222633012>\n> <@&1022201051740381194>',
					inline: true,
				},
				{
					name: 'HACHAS',
					value: '> <@&1022202728694415360> \n> <@&1022202810344935554> \n> <@&1022202889927655474> \n> <@&1022203694189662259>',
					inline: true,
				},
				{
					name: 'ARCANOS',
					value: '> <@&1022202310786556014> \n> <@&1022202419762958337> \n> <@&1022202533915152506> \n> <@&1022203342170107934> \n> <@&1022202586922766347> \n> <@&1022203544620777605>',
					inline: true,
				},
				{
					name: 'MARTILLOS',
					value: '> <@&1022201418758750289>  <@&1022201820732477540>',
					inline: true,
				},
				{
					name: 'ESPADAS',
					value: '> <@&1022207514886021140>  <@&1022207817781882910>',
					inline: true,
				},
				{
					name: 'NATURALES',
					value: '> <@&1022208363087548476>  <@&1022208476027572244> <@&1022208811987124335>',
					inline: true,
				},
				{
					name: 'MALDITOS',
					value: '> <@&1022206888126976050> <@&1022207179769528362>',
					inline: true,
				},
				{
					name: 'DAGAS',
					value: '> <@&1022204261049847878> \n> <@&1022204497285627975> \n> <@&1022204557780078683>',
					inline: true,
				},
				{
					name: 'PUÑOS',
					value: '> <@&1022203987014975508> \n> <@&1022204072654278767> \n> <@&1022204138655846401>',
					inline: true,
				},
				{
					name: 'SAGRADOS',
					value: '> <@&1022208003258204211> \n> <@&1022208156161548358> \n> <@&1022208267914580038>',
					inline: true,
				},
				{
					name: 'HIELOS',
					value: '> <@&1022205632666947715> \n> <@&1022205739047075901>',
					inline: true,
				},
				{
					name: 'FUEGOS',
					value: '> <@&1022205895603662929> \n> <@&1022206242569060395> \n> <@&1022206351323181096>',
					inline: true,
				},

				{
					name: 'VARAS',
					value: '> <@&1022201893814018079> <@&1022202180368867408>',
					inline: true,
				},
				{
					name: 'BOWS',
					value: '> <@&1022205510495252480> <@&1022206432281624606>',
					inline: true,
				},
				{
					name: 'LANZAS',
					value: '> <@&1022205283071701022>',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '`🐺 Roles más usados actualmente en Caerleon Outpost`',
					inline: false,
				},
				{
					name: 'MAZAS',
					value: '> <@&1022200428114489374> \n> <@&1022200864905113680> \n> <@&1022201051740381194>',
					inline: true,
				},
				{
					name: 'BOWS',
					value: '> <@&1022613155014266952> <@&1022613334354305074>',
					inline: true,
				},
				{
					name: 'MALDITOS',
					value: '> <@&1022206888126976050>',
					inline: true,
				},
				{
					name: 'NATURALES',
					value: '> <@&1022208363087548476>',
					inline: true,
				},
				{
					name: 'SAGRADOS',
					value: '> <@&1022208156161548358>',
					inline: true,
				},
				{
					name: 'ARCANOS',
					value: '> <@&1022202310786556014>',
					inline: true,
				}
			)
			.setImage('https://i.imgur.com/MYpI7JX.png');

		const embed_requisitos1 = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮ REQUISITOS    ❯❯  ㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('#FF7A4D') //
			.setDescription(
				'📝 __Los requisitos para recibir el rol del arma de Caerleon__ `🐺`\n\n- Especialización de 2 armas principales de Caerleon al **75**\n```Mínimo 1200 IP para asistir a de Caerleon```\n\n`💸` Cabe añadir que para optar a regear es necesario tener 2 armas o más al 75 de spec en Caerleon y de diferentes ramas.\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n📝 __Los requisitos para recibir el rol del arma de Roaming__ `🐎`\n\n- Especialización de 3 armas principales al **100**\n```Mínimo 1300 IP para asistir a un evento de Roaming```\n\n'
			)
			.setImage('https://i.imgur.com/MYpI7JX.png');

		const embed_reclamar1 = new EmbedBuilder()
			.setTitle('━━━━━━━━━━━━━━━━━━━ㅤㅤ         ❮❮    RECLAMAR ROL   ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━')
			.setColor('#FF7A4D') //
			.setDescription(
				'➡️ Mandar imagen por privado a:\n\n <@235918049990017025>\n\n<@599553288760852505>\n\n El formato de la imagen tiene que ser como la que se muestra debajo:\n'
			)
			.setImage('https://i.imgur.com/Gx4EasM.png');

		switch (interaction.values[0]) {
			case 'rolesusados1':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_rolesusados1],
				});
			case 'requisitos1':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_requisitos1],
				});
			case 'reclamar1':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_reclamar1],
				});
			default:
				return;
		}
	},
};
