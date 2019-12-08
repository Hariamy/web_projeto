const express = require('express');
const routes = express.Router();

const UsuariosController = require('./controllers/UsuariosController');

// ROTAS

routes.get('/usuarios', UsuariosController.exibir);
routes.get('/usuarios/:id', UsuariosController.buscarId);

routes.post('/usuarios', UsuariosController.criar);

routes.put('/usuarios/:id', UsuariosController.editar);

routes.put('/receitas/:id', UsuariosController.add_receita);
routes.put('/receitas/editar/:id', UsuariosController.editar_receita);

routes.put('/despesas/:id', UsuariosController.add_despesa);
routes.put('/despesas/editar/:id', UsuariosController.editar_despesa);

routes.put('/categorias/despesas/:id', UsuariosController.add_categoria_despesa);
routes.put('/categorias/despesas/editar/:id', UsuariosController.editar_categoria_despesa);

routes.put('/categorias/receitas/:id', UsuariosController.add_categoria_receita);
routes.put('/categorias/receitas/editar/:id', UsuariosController.editar_categoria_receita);


routes.delete('/usuarios/:id', UsuariosController.remover);


// routes.get('/despesas', DespesasController.exibir);
// routes.get('/despesas/:usuario_id', DespesasController.buscarUsuarioId);
// routes.post('/despesas', DespesasController.criar);
// routes.put('/despesas/:id', DespesasController.editar);
// routes.delete('/despesas/:id', DespesasController.remover);

// routes.get('/receitas', ReceitasController.exibir);
// routes.get('/receitas/:id', ReceitasController.buscarUsuarioId);
// routes.post('/receitas', ReceitasController.criar);
// routes.put('/receitas/:id', ReceitasController.editar);
// routes.delete('/receitas/:id', ReceitasController.remover);

// routes.get('/categorias', CategoriasController.exibir);
// routes.get('/categorias/:nome', CategoriasController.buscarNome);
// routes.get('/categorias/tipo/:tipo', CategoriasController.buscarTipo);
// routes.post('/categorias', CategoriasController.criar);
// routes.put('/categorias/:id', CategoriasController.editar);
// routes.delete('/categorias/:id', CategoriasController.remover);

module.exports = routes;