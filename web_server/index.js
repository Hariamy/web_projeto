const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const porta = 3001

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(porta);

// Iniciando o DB
mongoose.connect(
	'mongodb://localhost:27017/web',  
	{ useNewUrlParser: true, useUnifiedTopology: true },
    err => { if (err) return console.log("ih rapaz deu rum :("); console.error(err); }

).then(
    (err) => { 
        if (!err) { 
            console.log("Conexão realizada com sucesso!"); 
            console.log("localhost:"+porta+"/api")
        }
    }
);
