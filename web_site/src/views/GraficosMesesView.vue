<template>
  <div class="hello">
    <Menu />

    <SaldoMes
      mes="novembro"
      v-bind:saldo="saldo"
      v-bind:gastos="gastos"
    />

    <GraficosMeses />

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SaldoMes from '../components/SaldoMes.vue'
import GraficosMeses from '../components/GraficosMeses'
import { endpoints } from "../rotasAPI"

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
      saldo: 0,
      gastos: 0,
      usuario: undefined
    }
  },
  methods: {
    update: async function () {
      const email = localStorage.email;

      const response = await fetch(endpoints.usuario + email);
      this.usuario = await response.json();
      
      this.saldo = 0;
      this.usuario.receitas.map(obj => { this.saldo += parseFloat(obj.valor) } )
      
      this.gastos = 0;
      this.usuario.despesas.map(obj => { this.gastos += parseFloat(obj.valor) } )
    }
  },
  created: async function () {
    this.update();
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
