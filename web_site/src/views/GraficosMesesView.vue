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
  name: 'MesesView',
  props: {
  },
  components: {
    Menu,
    SaldoMes,
    GraficosMeses,
  },
  data() {
    return {
      calcular: false,
    }
  },
  methods: {
   
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
