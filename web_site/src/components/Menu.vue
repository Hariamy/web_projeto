<template>
  <div class="menu">
    <button type="button" class="btn btn-info" v-on:click="mostra_opcoes" v-show="botao_menu">
      M<br>E<br>N<br>U
    </button>

    <div class="opcoes" v-show="opcoes_menu">
      <ul v-on:mouseleave="esconde_opcoes">
        <li v-on:mouseover="m_receitas=true" v-on:mouseleave="m_receitas=false">
          <router-link to="/receitas">
            <img src="../assets/menu/receitas.svg"/>
            <span class="font-weight-bold text-success" v-show="m_receitas">RECEITAS</span>
          </router-link>
        </li>
        <li v-on:mouseover="m_despesas = true" v-on:mouseleave="m_despesas = false">
          <router-link to="/despesas">
            <img src="../assets/menu/despesas.svg"/>
            <span class="font-weight-bold text-danger" v-show="m_despesas">DESPESAS</span>
          </router-link>
        </li>
        <li v-on:mouseover="m_categorias = true" v-on:mouseleave="m_categorias = false">
          <router-link to="/categorias">
            <img src="../assets/menu/categorias.svg"/>
            <span class="font-weight-bold text-warning" v-show="m_categorias">CATEGORIAS</span>
          </router-link>
        </li>
        <li v-on:mouseover="m_graficos = true" v-on:mouseleave="m_graficos = false">
          <router-link to="/graficosmeses">
            <img src="../assets/menu/graficos.svg"/>
            <span class="font-weight-bold text-info" v-show="m_graficos">GRÁFICOS</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    receitas: String,
    despesas: String,
    categorias: String,
    graficos: String
  },
  data() {
    return {
      botao_menu: true,
      opcoes_menu: false,
      m_receitas: false,
      m_despesas: false,
      m_graficos: false,
      m_categorias: false,
    }
  },
  methods: {
    mostra_opcoes: function () {
      this.botao_menu = false;
      this.opcoes_menu = true;
    },
    esconde_opcoes: function () {
      if (this.opcoes_menu) {
        this.botao_menu = true;
        this.opcoes_menu = false;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  position: fixed;
  float: left;
  z-index: 99;
}

button {
  position: absolute;
  top: calc(50vh - 55px);
}

.opcoes {
  position: absolute;
  top: calc(50vh - 140px);
  width: 250px;
}

ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
img {
  margin: 10px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
}

a:link, a:visited, a:hover, a:active {
  text-decoration: none;
  color: inherit;
}
</style>
