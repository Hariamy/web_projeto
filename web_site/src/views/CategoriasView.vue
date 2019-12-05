<template>
  <div class="hello">
    <Menu 
      receitas="#"
      despesas="#"
      graficos="#"
      categorias="#"
    />
    <SaldoMes
      mes="novembro"
    />

    <Categorias
    />

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SaldoMes from '../components/SaldoMes.vue'
import Categorias from '../components/Categorias'
import { async } from 'q'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    get_categorias,
    get_categoria_id,
    editar_categoria,
    remover_categoria,
    inserir_categoria,
  },
  components: {
    Menu,
    SaldoMes,
    Categorias,
  },
  data() {
    return {
      calcular: false,
      url_categorias: 'http://localhost/3001/api/categorias/',
      
    }
  },
  methods: {
    get_categorias: async function(){
      let query = await fetch(this.url_categorias);
      return query;
    },

    get_categoria_id: async function(id){
      let query = await fetch(this.url_categorias+id);
      return query;
    },

    inserir_categoria: async function(categoria){
      let query = await fetch(this.url_categorias,{
        method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
        body:categoria
      })
    },

    remover_categoria: async function(id){
      let query = await fetch(this.url_categorias+id,{
        method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
      })
    },

    editar_categoria: async function(categoria,id){
      let query = await fetch(this.url_categorias+id,{
        method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
        body:categoria
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
