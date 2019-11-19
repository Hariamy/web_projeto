const express = require('express');
const routes = express.Router();

const UsuariosController = require('./controllers/UsuariosController');
const DespesasController = require('./controllers/DespesasController');
const ReceitasController = require('./controllers/ReceitasController');
const CategoriasController = require('./controllers/CategoriasController');


// ROTAS

routes.get('/usuarios', UsuariosController.exibir);
routes.get('/usuarios/:id', UsuariosController.buscarId);
routes.get('/usuarios/email/:email', UsuariosController.buscaEmail);
routes.post('/usuarios', UsuariosController.criar);
routes.put('/usuarios/:id', UsuariosController.editar);
routes.delete('/usuarios/:id', UsuariosController.remover);

routes.get('/despesas', DespesasController.exibir);
routes.get('/despesas/:usuario_id', DespesasController.buscarUsuarioId);
routes.post('/despesas', DespesasController.criar);
routes.put('/despesas/:id', DespesasController.editar);
routes.delete('/despesas/:id', DespesasController.remover);

routes.get('/receitas', ReceitasController.exibir);
routes.get('/receitas/:id', ReceitasController.buscarUsuarioId);
routes.post('/receitas', ReceitasController.criar);
routes.put('/receitas/:id', ReceitasController.editar);
routes.delete('/receitas/:id', ReceitasController.remover);

routes.get('/categorias', CategoriasController.exibir);
routes.get('/categorias/:nome', CategoriasController.buscarNome);
routes.get('/categorias/tipo/:tipo', CategoriasController.buscarTipo);
routes.post('/categorias', CategoriasController.criar);
routes.put('/categorias/:id', CategoriasController.editar);
routes.delete('/categorias/:id', CategoriasController.remover);

module.exports = routes;