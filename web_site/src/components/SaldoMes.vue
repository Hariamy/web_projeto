<template>
<div class="saldo-mes">
    <div class=" margem p-2 my-3 rounded shadow-sm border border-info">
      
      <div class="d-flex justify-content-around">
        <div class="col-md-2 align-self-center">
          <router-link to="/graficosMeses">
            <img src="../assets/icone.svg" />
          </router-link>
        </div>
        
        <div class="col-md-7">
          <h3 class="text-center text-info font-weight-bold text-uppercase">SALDO FINANCEIRO: {{ mes }}</h3>
          
          <div>
            <div class="d-flex justify-content-center ">

              <div class="rounded col-md-3 py-1 px-lg-2 bg-success text-white">
                <p class="text-center font-weight-bold">Saldo<br>R$ {{ formatar(usuario.saldo) }}</p>
              </div>
              
              <div class="col-md-1 py-1 px-lg-1"></div>
              
              <div class="rounded col-md-3 py-1 px-lg-2 bg-danger text-white">
                <p class="text-center font-weight-bold">Gastos<br>R$ {{ formatar(usuario.gastos) }}</p>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-1 align-self-center">
          <img v-on:click="opcoes_usuario=!opcoes_usuario" src="../assets/person.svg" />
        </div>
      </div>

      <div class="opcoes-usuario shadow border border-info rounded" v-show="opcoes_usuario" v-on:mouseleave="opcoes_usuario=false">
        <p class="botao-usuario">Configurações</p>
        <p class="botao-usuario">Sair</p>
      </div>
    </div>
</div>
</template>

<script>
import { endpoints } from "../conexaoApi"

export default {
  name: "SaldoMes",
  props: {
    mes: String
  },
  data() {
    return {
      saldo: 0,
      gastos: 0,
      opcoes_usuario: false,
      usuario: {}
    };
  },
  methods: {
    formatar: function(valor) {
      try {
        return parseFloat(valor).toFixed(2)
      } catch {
        return 0
      }
    },
    esconde_opcoes: function() {
      if (this.opcoes_menu) {
        this.botao_menu = true;
        this.opcoes_menu = false;
      }
    }
  },
  created: async function () {
    const email = localStorage.email;
    const response = await fetch(endpoints.usuario + email);
    this.usuario = await response.json();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margem {
  margin: 60px;
  margin-left: 160px;
}

p {
  margin: 0;
}

h3 {
  padding-bottom: 20px;
}

img {
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.opcoes-usuario {
  position: absolute;
  top: 140px;
  width: 150px;
  background-color: white;
  right: 0;
  margin-right: 10vw;
  padding: 10px;
  z-index: 99;
}

.botao-usuario {
  cursor: pointer;
  text-align: right;

}

</style>
