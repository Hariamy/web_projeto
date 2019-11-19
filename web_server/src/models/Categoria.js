const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema ({
	nome: {
		type: String,
		required: true,
	},
	cor: {
		type: String,
		required: true,
    },
    tipo: {
        type: String,
		required: true,
    }
     
}, { collection: "categoria" });

mongoose.model('Categoria', CategoriaSchema);