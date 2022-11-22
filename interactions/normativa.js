const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa interaction',
	execute: async (interaction) => {
		const embed_general = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                    ❮❮    NORMATIVA GENERAL    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('#3769a9')
			.setDescription('`Normas aplicables con carácter general⠀`')

			.addFields(
				{
					name: 'ㅤ',
					value: '> :one:  **Respeto ante todos los miembros** que estén en el gremio.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :two:  **Llorar, gritar y quejarse no sirve de nada**, actuar con calma, ofrecer soluciones y disfrutar del juego.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :three:  **El líder de la party** es quien organiza, hace y deshace. No está obligado a aceptar a todos, es quien pone sus normas.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :four:  **Cualquier persona que robe/desprestigie el gremio**, será totalmente expuesta y kickeada, sin opción de retorno.',
					inline: false,
				},
				{
					name: 'ㅤ',
					value: '> :five:  **No queremos ego players**, cada integrante de Kymera tiene un nivel diferente. Estamos para aprender de los fallos, nadie es mejor que nadie,',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :six:  **Los rangos funcionan por Meritocracia**. (*personas que están más capacitadas según sus méritos*)',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :seven: ** En Caerleon y Zona Negra**, **RED IS DEATH**, no hay dramas por matar.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :eight:  **No os exime de la responsabilidad** si no has leído las normas y se incumplen algunos de los puntos ya mencionados.',
					inline: true,
				}
			)
			.setImage('https://i.imgur.com/15YdPGw.png');

		const embed_ncaerleon = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                     ❮❮    NORMATIVA CAERLEON    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('#5f2626')
			.setDescription('`Normas aplicables únicamente a Fama`')

			.addFields(
				{
					name: 'ㅤ',
					value: '> :one:  **Se le hará caso al party leader o al caller de la party designado**, si alguien se niega a hacer caso será motivo de kick y se le matará (DE NINGUNA MANERA PODRÁ PEDIR REGEAR)',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :two:  **No podrá optar al regear** ninguna persona que no llegue a la IP mínima y especialización requerida para la actividad.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :three:  **RED IS DEATH**, si encontráis una party en la que esté otro miembro de Kymera, podéis matarlo.',
					inline: false,
				},
				{
					name: 'ㅤ',
					value: '> :four:  **Se dará un primer aviso** si se perjudica a una party de full Kymera. El siguiente aviso será expulsión (*Bombearlos , ir con oso a joder, revelar posición*)',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :five:  **Se dará un primer aviso** si hay muchas quejas de un jugador. El siguiente aviso será motivo de expulsión permanente.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '>  :six:  **No toleramos lloros ni quejas**, solo queremos soluciones.',
					inline: false,
				}
			)
			.setImage('https://i.imgur.com/MHyJTVe.png');

		const embed_nfama = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮    NORMATIVA FAMA    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('#c5bd63')
			.setDescription('`Normas aplicables únicamente a Fama`')
			.addFields(
				{
					name: 'ㅤ',
					value: '> :one:  **El party líder es quien dirige la party**, elige quien va, que builds llevar y que IP mínimo. Podrá kickear libremente si no se le respeta.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :two:  **Al caller designado se le hará caso y se le escuchará en todo momento**, de lo contrario, este podrá expulsar a cualquier miembro de la party.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :three:  **El líder no está obligado a aceptar a todo el mundo**, es su party, ponen sus reglas y el límite de miembros que asistirán.',
					inline: false,
				},
				{
					name: 'ㅤ',
					value: '> :four: **No toleramos lloros ni quejas**, solo soluciones.',
					inline: true,
				},
				{
					name: 'ㅤ',
					value: '> :five:  Si hay más de una party en la misma Dungeon, **se dividirá**, o  tendrá prioridad **la que más IP tenga con set de pelea**. ',
					inline: true,
				}
			)
			.setImage('https://i.imgur.com/wMvrGAv.png');

		switch (interaction.values[0]) {
			case 'general':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_general],
				});
			case 'ncaerleon':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_ncaerleon],
				});
			case 'nfama':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_nfama],
				});
			default:
				return;
		}
	},
};
