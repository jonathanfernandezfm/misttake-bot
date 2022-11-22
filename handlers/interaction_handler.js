const fs = require('node:fs');
const path = require('path');

module.exports = (client) => {
	const interactionsPath = path.join(__dirname, '../interactions');
	const interactionsFiles = fs.readdirSync(interactionsPath).filter((file) => file.endsWith('.js'));

	for (const file of interactionsFiles) {
		const command = require(`../interactions/${file}`);

		if (command.name) client.interactions.set(command.name, command);
	}
};
