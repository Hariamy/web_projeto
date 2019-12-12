<template>
  
  <div v-if="verificar" class="menuLogin float-md-right vh-100 d-flex flex-column justify-content-center">
    <h3 class="text-center text-width-bold">Verificação do email</h3>

    <form class="d-flex justify-content-center flex-column">
      <div class="form-group">
        <input 
          v-model="token"
          type="text" 
          class="form-control" 
          id="inputToken" 
          placeholder="Token de verificação" 
          name="token" 
        />
      </div>

      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary" v-on:click="verificarConta">Verificar</button>
      </div>
    </form>
    
  </div>
  <div v-else  class="menuLogin float-md-right vh-100 d-flex flex-column justify-content-center">
    <h1 class="text-white text-center font-weight-bold">Token verificado com sucesso!</h1>      
    <router-link class="text-white text-center" to='/'>Realizar Login</router-link>
  </div>
</template>

<script>

import { endpoints } from "../rotasAPI";

export default {
  name: "Verificar",
  data() {
    return {
      verificar: true
    }
  },
  methods: {
    verificarConta: async function () {
      const response = await fetch( endpoints.usuario + this.token);
      const usuario = await response.json();

      const request = await fetch( endpoints.usuario + usuario._id , {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
          saldo: usuario.saldo,
          gastos: usuario.gastos,
          categorias_receitas: usuario.categorias_receitas,
          categorias_despesas: usuario.categorias_despesas,
          token:'',
          verificado:true
        })
      });

      if (await request != undefined) {
        this.email = "";
        this.nome = "";
        this.senha = "";
        this.confirmar_senha = "";
        this.verificar = false;
      } else {
        alert("Token Inválido");
      }
    }
  },
  mounted: function () {
    this.verificar = true;
  }
};
</script>

<style scoped>
.menuLogin {
  padding: 10%;
  background-color: rgba(125, 125, 125, 0.2);
  width: 40vw;
  height: 100%;
}
.externa {
  background-image: url("~@/assets/background.png");
  /* Full height */
  height: 100vh;
  width: 100vw;
  /* Center and scale the image nicely */
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  margin-top: 50px;
  margin-bottom: 20px;
}

.image-upload > input {
  display: none;
}

.image-upload img{
  border-radius: 50%;
  width: 140px;
  height: 140px;
  cursor: pointer;
}

p {
  margin-bottom: 0;
  margin-top: 15px;
  padding-bottom: 0;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
</style>