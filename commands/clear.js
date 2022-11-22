module.exports = {
	name: 'clear',
	description: 'Comando para eliminar un numero de mensajes dado',
	execute: async (msg, args) => {
		if (!msg.member.permissions.has('ADMINISTRATOR')) return;
		if (!args[0]) return msg.reply({ ephemeral: true, content: 'Specify a number of messages' });
		if (isNaN(args[0])) return msg.reply({ ephemeral: true, content: 'Specify a number of messages' });

		if (args[0] > 100) return msg.reply({ ephemeral: true, content: 'Max number is 100' });
		if (args[0] < 1) return msg.reply({ ephemeral: true, content: 'Min number is 1' });

		await msg.channel.messages.fetch({ limit: args[0] }).then((messages) => {
			msg.channel.bulkDelete(messages);
		});
	},
};
