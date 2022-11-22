const fs = require('node:fs');
const path = require('path');

module.exports = (client) => {
	const commandsPath = path.join(__dirname, '../commands');
	const commandsFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

	for (const file of commandsFiles) {
		const command = require(`../commands/${file}`);

		if (command.name) client.commands.set(command.name, command);
	}
};
