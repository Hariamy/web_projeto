const mongoose = require('mongoose');
const mailer = require('../email/mailer')

const Usuario = mongoose.model('Usuario');

module.exports = {
	async exibir(req, res) {
		const usuarios = await Usuario.find({});

		return res.json(usuarios);
	},

	async enviarEmail(req,res){
		const html = `Olá, obrigado por se registrar.
        <br/>
        Por favor, verifique o seu email colando o seguinte token:
        <br/>
        Token: <b>${req.body.token}</b>
        <br/>
        Na página seguinte:
        <a href='http://localhost:8080/#/verificar'>http://localhost:8080/#/verificar</a>
        `;

        const response = await mailer.sendMail('admin@gfin.com','Verifique o seu email',req.body.email,html);
        return res.json(response)
	},

	async buscarId(req, res) {
		const usuario = await Usuario.findById(req.params.id);

		return res.json(usuario);
	},

	async buscarToken(req, res) {
		const usuario = await Usuario.findOne({token:req.params.token});

		return res.json(usuario);
	},

	async criar(req, res) {
		try {
			req.body._id = req.body.email;

			const usuario = await Usuario.create(req.body);

			return res.json(usuario);

		} catch (err) {
			return res.send(err);
		}
	},
	
	async editar(req, res) {
		const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false });
		
		return res.json(usuario);
	},

	async remover(req, res) {
		await Usuario.findByIdAndRemove(req.params.id);

		return res.send();
	},

	async add_receita(req, res) {
		try {
			req.body.id = Date.now().toString();

			const usuario = await Usuario.findByIdAndUpdate(req.params.id, { $push: { receitas: req.body }}, { new: true, useFindAndModify: false });

			return res.json(usuario)

		} catch (err) {
			return res.send(err)
		}
	},

	async editar_receita(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const receitas = usuario.receitas;

			const index = receitas.findIndex(obj => obj.id =  req.body.id);

			if (index != undefined) {
				receitas[index] = req.body

				const update = { receitas };

				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},

	async remover_receita(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const receitas = usuario.receitas;

			const index = receitas.findIndex(obj => obj.id =  req.query.item_id);

			if (index != undefined) {
				receitas.splice(index, 1);

				const update = { receitas };

				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},

	async add_categoria_receita(req, res) {
		try {
			req.body.id = Date.now().toString();

			const usuario = await Usuario.findByIdAndUpdate(req.params.id, { $push: { categorias_receitas: req.body }}, { new: true, useFindAndModify: false });

			return res.json(usuario)

		} catch (err) {
			return res.send(err)
		}
	},

	async editar_categoria_receita(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const categorias_receitas = usuario.categorias_receitas;

			const index = categorias_receitas.findIndex(obj => obj.id =  req.body.id);

			if (index != undefined) {
				categorias_receitas[index] = req.body

				const update = { categorias_despesas };
				
				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},
	
	async remover_categoria_receita(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const categorias_receitas = usuario.categorias_receitas;

			const index = categorias_receitas.findIndex(obj => obj.id =  req.query.item_id);

			if (index != undefined) {
				categorias_receitas.splice(index, 1);

				const update = { categorias_receitas };

				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},

	async add_despesa(req, res) {
		try {
			req.body.id = Date.now().toString();

			const usuario = await Usuario.findByIdAndUpdate(req.params.id, { $push: { despesas: req.body }}, { new: true, useFindAndModify: false });

			return res.json(usuario)

		} catch (err) {
			return res.send(err)
		}
	},

	async editar_despesa(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const despesas = usuario.despesas;

			const index = despesas.findIndex(obj => obj.id =  req.body.id);

			if (index != undefined) {
				despesas[index] = req.body

				const update = { despesas };
				
				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},
	
	async remover_despesa(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const despesas = usuario.despesas;

			const index = despesas.findIndex(obj => obj.id =  req.query.item_id);

			if (index != undefined) {
				despesas.splice(index, 1);

				const update = { despesas };

				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},

	async add_categoria_despesa(req, res) {
		try {
			req.body.id = Date.now().toString();

			const usuario = await Usuario.findByIdAndUpdate(req.params.id, { $push: { categorias_despesas: req.body }}, { new: true, useFindAndModify: false });

			return res.json(usuario)

		} catch (err) {
			return res.send(err)
		}
	},

	async editar_categoria_despesa(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const categorias_despesas = usuario.categorias_despesas;

			const index = categorias_despesas.findIndex(obj => obj.id =  req.body.id);

			if (index != undefined) {
				categorias_despesas[index] = req.body

				const update = { categorias_despesas };
				
				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},

	async remover_categoria_despesa(req, res) {
		try {
			const usuario = await Usuario.findById(req.params.id);
			const categorias_despesas = usuario.categorias_despesas;

			const index = categorias_despesas.findIndex(obj => obj.id =  req.query.item_id);

			if (index != undefined) {
				categorias_despesas.splice(index, 1);

				const update = { categorias_despesas };

				const up_usuario = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, useFindAndModify: false});

				return res.json(up_usuario);

			} else {
				return res.send({erro: "deu rum"})
			}

		} catch (err) {
			return res.send(err)
		}
	},
};