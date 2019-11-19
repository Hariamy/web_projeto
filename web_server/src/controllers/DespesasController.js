const mongoose = require('mongoose');

const Despesa = mongoose.model('Despesa');

module.exports = {
	async exibir(req, res) {
		const despesas = await Despesa.find({});

		return res.json(despesas);
	},

	async buscarUsuarioId(req, res) {
		const despesa = await Despesa.find( { usuario_id: req.params.usuario_id } );

		return res.json(despesa);
	},

	async criar(req, res) {
		const despesa = await Despesa.create(req.body);

		return res.json(despesa);
	},
	
	async editar(req, res) {
		const despesa = await Despesa.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(despesa);
	},

	async remover(req, res) {
		await Despesa.findByIdAndRemove(req.params.id);

		return res.send();
	},

};