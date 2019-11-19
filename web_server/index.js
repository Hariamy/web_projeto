const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
	'mongodb+srv://hariamy:HARIAMY@clusterelas-oqljd.mongodb.net/test?retryWrites=true&w=majority ',  
	{ useNewUrlParser: true },
    err => { if (err) return console.error(err); }
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);