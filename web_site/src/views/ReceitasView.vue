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

    <Receitas 
    />

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SaldoMes from '../components/SaldoMes.vue'
import Receitas from '../components/Receitas.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    get_receitas,
    get_receita_id,
    inserir_receita,
    remover_receita,
    editar_receita,
  },
  components: {
    Menu,
    SaldoMes,
    Receitas,
  },
  data() {
    return {
      calcular: false,
      url_receitas: 'http://localhost/3001/api/receitas/',
    }
  },
  methods: {
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
