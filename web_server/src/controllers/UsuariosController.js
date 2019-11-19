const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario');

module.exports = {
	async exibir(req, res) {
		const usuarios = await Usuario.find({});

		return res.json(usuarios);
	},

	async buscarId(req, res) {
		const usuario = await Usuario.findById(req.params.id);

		return res.json(usuario);
	},

	async buscaEmail(req, res) {
		const usuario = await Usuario.findOne( { email: req.params.email } );

		return res.json(usuario);
	},

	async criar(req, res) {
		const usuario = await Usuario.create(req.body);

		return res.json(usuario);
	},
	
	async editar(req, res) {
		const usuario = await Usuario.findOneAndUpdate(req.params.id, req.body, { new: true });

		return res.json(usuario);
	},

	async remover(req, res) {
		await Usuario.findByIdAndRemove(req.params.id);

		return res.send();
	},

};