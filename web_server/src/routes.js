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
routes.delete('/receitas/:id', UsuariosController.remover_receita);
routes.delete('/despesas/:id', UsuariosController.remover_despesa);
routes.delete('/categorias/receitas/:id', UsuariosController.remover_categoria_receita);
routes.delete('/categorias/despesas/:id', UsuariosController.remover_categoria_despesa);

module.exports = routes;