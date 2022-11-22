const data = require('../data/db.json');
const fs = require('node:fs');
const path = require('path');

module.exports = {
	name: 'reclamos_canal',
	description: 'Guarda el canal para formularios',
	execute: async (msg, args) => {
		const canal_id = args[0].substring(args[0].indexOf('#') + 1, args[0].lastIndexOf('>'));
		data.canal_reclamos = canal_id;
		const dataPath = path.join(__dirname, '../data/db.json');
		fs.writeFileSync(dataPath, JSON.stringify(data));
		await msg.delete();
	},
};
