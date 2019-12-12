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
    saldo: {
    	type: Number,
    	required: true,
    },
    gastos: {
    	type: Number,
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
    },
    token: {
        type: String,
        required: true, 
    },
    verificado: {
        type: Boolean,
        required: true, 
    },
    
}, { collection: "usuario" });

mongoose.model('Usuario', UsuarioSchema);