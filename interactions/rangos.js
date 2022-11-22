const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'rangos',
	description: 'Rangos interaction',
	execute: async (interaction) => {
		const embed_rangosadm = new EmbedBuilder()
			.setColor('#d20808')
			.setThumbnail('https://i.imgur.com/sxOHVjt.png')
			.setDescription(
				'<@&1015296284359413842> : Fundador de la guild, encargado de los asuntos internos y del asesoramiento de todos los permisos, roles y administración del gremio.'
			);

		const embed_rangosadm1 = new EmbedBuilder()
			.setColor('#e7802c')
			.setThumbnail('https://i.imgur.com/l2yPJjA.png')
			.setDescription(
				'<@&1015942996455325719> : Los asesores del Guild Master, se encargan de los asuntos diarios del gremio. Trabajan en estrecha colaboración con el Consejo Warboss y el Guild Master para asegurar los objetivos de Kymera y con el tesorero para asegurar una economía estable.'
			);

		const embed_rangosadm2 = new EmbedBuilder()
			.setColor('#f1c72e')
			.setThumbnail('https://i.imgur.com/cw5nnBE.png')
			.setDescription(
				'<@&1015944979136389190> : Ejercen la función de liderazgo general, asegurándose de que todos se comporten correctamente y se diviertan, responder dudas y ayudar en el día a día.'
			);

		const embed_rangosadm3 = new EmbedBuilder()
			.setColor('#ffff43')
			.setThumbnail('https://i.imgur.com/tLY5DVy.png')
			.setDescription(
				'<@&1016011655957729331> : Gerentes financieros del gremio. El trabajo del tesorero es asegurarse de que la economía de Kymera está equilibrada de la mejor manera posible y así mismo, mantener las estructuras funcionales como Hideout y Territorios.'
			);

		const embed_rangosadm4 = new EmbedBuilder()
			.setColor('#5969b5')
			.setThumbnail('https://i.imgur.com/P622nrg.png')
			.setDescription(
				'<@&1016042360053973052> : Shotcaller con experiencia y conocimiento elevado en batallas de mundo abierto. Forman parte del concilio ZvZ y estrategia, y su función es liderar incursiones a castillos, ZvZ a media escala, magos, puestos avanzados...'
			);

		const embed_rangosadm5 = new EmbedBuilder()
			.setColor('#9f6cb4')
			.setThumbnail('https://i.imgur.com/HGCEKS8.png')
			.setDescription(
				'<@&1016042908257894460> : Se asegura de la administración de las solicitudes y de reclutar nuevos miembros. Revisan de que estos cumplan con los requisitos requeridos y que el proceso sea rápido y fluido.'
			);

		const embed_rangosadm6 = new EmbedBuilder()
			.setColor('#723288')
			.setThumbnail('https://i.imgur.com/JlsqOgU.png')
			.setDescription(
				'<@&1020660198186160138> : Es el responsable de la organización de los grupos relacionados con las actividades PvP/PvE dentro del gremio, dar contenido y revisar que todo esté en orden para el desarrollo de estas.'
			);

		const embed_rangosuser = new EmbedBuilder()
			.setColor('#3498db')
			.setThumbnail('https://i.imgur.com/lNoJeTQ.png')
			.setDescription(
				'<@&1016043872469647375> : Los miembros más antiguos y fieles de la guild. Su aportación en las peleas es la más significativa. Podrán formar parte del equipo de administración si se requiere en momentos determinados.'
			);

		const embed_rangosuser1 = new EmbedBuilder()
			.setColor('#3498db')
			.setThumbnail('https://i.imgur.com/lNoJeTQ.png')
			.setDescription(
				'<@&1016043768916488222> : Como su propio nombre indica, los veteranos que ya llevan cierto tiempo en la guild y tienen la IP y los conocimientos de posicionamiento y pelea suficientes para actividades que requieren mayor dificultad'
			);

		const embed_rangosuser2 = new EmbedBuilder()
			.setColor('#578b42')
			.setThumbnail('https://i.imgur.com/tRXSKNx.png')
			.setDescription(
				'<@&1016043570773381190> : Miembros que han pasado satisfactoriamente el periodo de prueba y han gozan de los permisos de miembro tanto en discord como en Albion.'
			);

		const embed_rangosuser3 = new EmbedBuilder()
			.setColor('#4cff05')
			.setThumbnail('https://i.imgur.com/Z5ON3Gi.png')
			.setDescription(
				'<@&1016043481183031397> : Miembros que recién entran al gremio  y que tendrán un periodo de prueba de (2) semanas en el cual tendrán que conseguir cierta fama (PvP/PvP) para obtener los permisos de KYMERA miembro.'
			);

		const embed_vacantes = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮    VACANTES    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('386CE5') //
			.setDescription(
				'ㅤㅤㅤㅤ📝 **VACANTE A MODERACIÓN** ➠  🟥\n\nㅤㅤㅤㅤ📝 **VACANTE A RECLUTADOR** ➠ 🟩\n\nㅤㅤㅤㅤ📝 **VACANTE A CREADOR DE CONTENIDO** ➠ 🟩\n\nㅤㅤㅤㅤ📝 **VACANTE A CALLER** ➠ 🟩\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n`✉️` **Para solicitar las vacantes disponibles, contactar por privado con**:\n<@&1015296284359413842> | <@&1015942996455325719> | <@&1015944979136389190>'
			)
			.setThumbnail('https://i.imgur.com/VTeViNc.png');

		switch (interaction.values[0]) {
			case 'distribucion':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [
						embed_rangosadm,
						embed_rangosadm1,
						embed_rangosadm2,
						embed_rangosadm3,
						embed_rangosadm4,
						embed_rangosadm5,
						embed_rangosadm6,
					],
				});
			case 'reparto':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_rangosuser, embed_rangosuser1, embed_rangosuser2, embed_rangosuser3],
				});
			case 'reclamar':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_vacantes],
				});
			default:
				return;
		}
	},
};
