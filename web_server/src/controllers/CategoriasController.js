const mongoose = require('mongoose');

const Categoria = mongoose.model('Categoria');

module.exports = {
	async exibir(req, res) {
		const categorias = await Categoria.find({});

		return res.json(categorias);
	},

	async buscarNome(req, res) {
		const categoria = await Categoria.find( { nome: req.params.nome } );

		return res.json(categoria);
	},

    async buscarTipo(req, res) {
		const categoria = await Categoria.find( { tipo: req.params.tipo } );

		return res.json(categoria);
	},

	async criar(req, res) {
		const categoria = await Categoria.create(req.body);

		return res.json(categoria);
	},
	
	async editar(req, res) {
		const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(categoria);
	},

	async remover(req, res) {
		await Categoria.findByIdAndRemove(req.params.id);

		return res.send();
	},

};