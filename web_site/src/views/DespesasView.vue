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

    <Despesas
    />

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SaldoMes from '../components/SaldoMes.vue'
import Despesas from '../components/Despesas.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    get_despesas,
    get_despesa_id,
    inserir_despesa,
    remover_despesa,
    editar_despesa,
  },
  components: {
    Menu,
    SaldoMes,
    Despesas,
  },
  data() {
    return {
      calcular: false,
      url_despesas: 'http://localhost/3001/api/despesas/',
    }
  },
  methods: {
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
