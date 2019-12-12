const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const porta = process.env.PORT || 3001;

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(porta);

// Iniciando o DB
// admin
// FdHB83x5Dz7pvlNM
mongoose.connect(
	'mongodb://localhost:27017/web',  
	{ useNewUrlParser: true, useUnifiedTopology: true },
    err => { return 1; }
)