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
      v-bind:atualizar="refrash"
    />

    <Receitas
      v-bind:update="update"
    />

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SaldoMes from '../components/SaldoMes.vue'
import Receitas from '../components/Receitas.vue'

export default {
  name: 'ReceitasView',
  props: {
  },
  components: {
    Menu,
    SaldoMes,
    Receitas,
  },
  data() {
    return {
      refrash: false,
    }
  },
  methods: {
    update: function () {
      this.refrash = !this.refrash
    }
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
