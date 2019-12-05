import Vue from 'vue'
import Router from 'vue-router'

//import Home from './components/HelloWorld'
import Inicial from './views/InicialView'
import Cadastrar from './views/CadastrarView'
import Receitas from './views/ReceitasView'
import Categorias from './views/CategoriasView'
import Despesas from './views/DespesasView'
import GraficosMeses from './views/GraficosMesesView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "inicial",
      component: Inicial
    }, {
      path: "/cadastrar",
      name: "cadastrar",
      component: Cadastrar
    }, {
      path: "/receitas",
      name: "receitas",
      component: Receitas
    }, {
      path: "/despesas",
      name: "despesas",
      component: Despesas
    }, {
      path: "/categorias",
      name: "categorias",
      component: Categorias
    }, {
      path: "/graficosMeses",
      name: "graficosMeses",
      component: GraficosMeses
    }
  ]
})