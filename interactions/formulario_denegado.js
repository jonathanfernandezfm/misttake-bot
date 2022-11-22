const { EmbedBuilder } = require('discord.js');
const { rol_denegado, rol_espera } = require('../data/db.json');

module.exports = {
	name: 'denegar_formulario',
	description: 'Formulario denegado',
	execute: async (interaction) => {
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#FF4D4D')
			.setDescription(`❌ Denegado por el <@&1031119833024167972> - <@${interaction.user.id}>\nㅤ⠀⠀⠀⠀⠀⠀⠀\n`);

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const user = interaction.message.mentions.users.first();
		const person = await interaction.guild.members.fetch(user.id);
		person.roles.add(rol_denegado);
		person.roles.remove(rol_espera);

		const dmChannel = await interaction.message.mentions.users.first().createDM();

		const embed_response = new EmbedBuilder()
			.setColor('#fc0303')
			.setTitle('`❌` Tu formulario ha sido denegado ')
			.setDescription('Inténtalo en otro momento');
		// .setImage('https://i.imgur.com/CYz5IsA.png');

		dmChannel.send({
			content: '',
			embeds: [embed_response],
		});
	},
};
