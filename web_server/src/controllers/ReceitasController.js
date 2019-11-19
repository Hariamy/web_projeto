const mongoose = require('mongoose');

const Receita = mongoose.model('Receita');

module.exports = {
	async exibir(req, res) {
		const receitas = await Receita.find({});

		return res.json(receitas);
	},

	async buscarUsuarioId(req, res) {
		const receita = await Receita.find( { usuario_id: req.params.usuario_id } );

		return res.json(receita);
	},

	async criar(req, res) {
		const receita = await Receita.create(req.body);

		return res.json(receita);
	},
	
	async editar(req, res) {
		const receita = await Receita.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(receita);
	},

	async remover(req, res) {
		await Receita.findByIdAndRemove(req.params.id);

		return res.send();
	},

};