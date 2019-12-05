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

    <GraficosMeses />

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SaldoMes from '../components/SaldoMes.vue'
import GraficosMeses from '../components/GraficosMeses'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    get_categorias,
    get_categoria_id,
    editar_categoria,
    remover_categoria,
    inserir_categoria,

    get_despesas,
    get_despesa_id,
    inserir_despesa,
    remover_despesa,
    editar_despesa,

    get_receitas,
    get_receita_id,
    inserir_receita,
    remover_receita,
    editar_receita,
  },
  components: {
    Menu,
    SaldoMes,
    GraficosMeses,
  },
  data() {
    return {
      calcular: false,
       url_categorias: 'http://localhost/3001/api/categorias/',
       url_despesas: 'http://localhost/3001/api/despesas/',
       url_receitas: 'http://localhost/3001/api/receitas/',
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

    get_despesas: async function(){
      let query = await fetch(this.url_despesas);
      return query;
    },

    get_despesa_id: async function(id){
      let query = await fetch(this.url_despesas+id);
      return query;
    },

    inserir_despesa: async function(despesa){
      let query = await fetch(this.url_despesas,{
        method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
        body:despesa
      })
  },

    remover_despesa: async function(id){
      let query = await fetch(this.url_despesas+id,{
        method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
      })
    },

    editar_despesa: async function(despesa,id){
      let query = await fetch(this.url_despesas+id,{
        method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
        body:despesa
      })
    },

    get_receitas: async function(){
      let query = await fetch(this.url_receitas);
      return query;
    },

    get_receita_id: async function(id){
      let query = await fetch(this.url_receitas+id);
      return query;
    },

    inserir_receita: async function(receita){
      let query = await fetch(this.url_receitas,{
        method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
        body:receita
      })
    },
    
    remover_receita: async function(id){
      let query = await fetch(this.url_receitas+id,{
        method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
      })
    },

    editar_receita: async function(receita,id){
      let query = await fetch(this.url_receitas+id,{
        method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
        },
        body:receita
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
