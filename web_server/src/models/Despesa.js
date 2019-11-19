const mongoose = require('mongoose');

const DespesaSchema = new mongoose.Schema ({
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
    vencimento: {
		type: Date,
		required: true,
    },
	valor: {
		type: mongoose.Decimal128,
		required: true,
    },
    
}, { collection: "despesa" });

mongoose.model('Despesa', DespesaSchema);