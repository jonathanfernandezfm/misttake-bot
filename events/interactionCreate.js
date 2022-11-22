const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isSelectMenu() && !interaction.isButton() && !interaction.isModalSubmit()) return;

		const interactionAction = interaction.client.interactions.get(interaction.customId);
		if (!interactionAction) return;

		try {
			await interactionAction.execute(interaction);
		} catch (err) {
			interaction.reply('there was an error executing this command. 😫');
			console.log(err);
		}
	},
};
