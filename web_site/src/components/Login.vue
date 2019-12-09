<template>
      <div class="menuLogin float-md-right vh-100 d-flex flex-column justify-content-center">
        <div class="d-flex justify-content-center">
          <img alt="Logo" src="../assets/icone.svg" />
        </div>
        <h1 class="text-center text-white font-weight-bold" >GFIN</h1>
        <h4 class="text-center text-white">Gerenciador Financeiro</h4>
        <form>
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
            />
          </div>
          <div class="form-group">
            <input
              v-model="senha"
              type="password"
              class="form-control"
              id="InputPassword1"
              placeholder="Senha"
              name="senha"
            />
          </div>

          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary" v-on:click="autenticar">Login</button>
          </div>

          <div class="d-flex justify-content-center">
            <p class="form-text">Ainda não possui cadastro?</p>
          </div>

          <div class="d-flex justify-content-center">
            <router-link class="text-white" to="/cadastrar">Criar conta</router-link>
          </div>
        </form>
      </div>

</template>

<script>

import { endpoints } from "../conexaoApi"

export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      opcoes_usuario: false,
      usuario: {}
    };
  },
  methods: {
    autenticar: async function () {
      const response = await fetch( endpoints.usuario + this.email);
      const usuario = await response.json()

      if (await usuario.senha === this.senha) {
       
        localStorage.email = this.email;
   
        this.$router.push('/graficosMeses')
        
      } else {
        alert("Erro ao realizar login")
      }

    }
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
  width: 200px;
  height: 200px; 
}
p {
  margin-bottom: 0;
  margin-top: 15px;
  padding-bottom: 0;
}
h1 {
  margin-bottom: 0;
  margin-top: 15px;  
}
h4 {
  margin-bottom: 60px;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
</style>