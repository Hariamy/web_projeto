const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema ({
	usuario_id: {
		type: String,
		required: true,
	},
	nome: {
		type: String,
		required: true,
	},
	categoria: {
		type: String,
		required: true,
    },
    data: {
		type: Date,
		required: true,
    },
	valor: {
		type: mongoose.Decimal128,
		required: true,
    },
    
}, { collection: "receita" });

mongoose.model('Receita', ReceitaSchema);