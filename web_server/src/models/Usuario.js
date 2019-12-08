const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema ({
	_id: {
		type: String,
		required: true
	},
	nome: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	senha: {
		type: String,
		required: true,
    },
    receitas: {
    	type: Array,
    	required: true,
    },
    despesas: {
    	type: Array,
    	required: true,
    },
    categorias_receitas: {
    	type: Array,
    	required: true,	
    },
    categorias_despesas: {
    	type: Array,
    	required: true,	
    }
    
}, { collection: "usuario" });

mongoose.model('Usuario', UsuarioSchema);