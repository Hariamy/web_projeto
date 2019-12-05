<template>
  <div class="menuLogin float-md-right vh-100 d-flex flex-column justify-content-center">
    <h3 class="text-center">Formulário de Cadastro</h3>

    <form class="d-flex justify-content-center flex-column">
      <div class="form-group image-upload d-flex justify-content-center">
        <label for="file-input">
          <img src="../assets/person.svg" alt="Foto de Perfil" />
        </label>

        <input id="file-input" type="file" accept="image/*" name="foto" />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="InputEmail1"
          aria-describedby="emailHelp"
          placeholder="E-mail"
          nome="email"
        />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="InputNome" placeholder="Nome" name="nome" />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="InputPassword"
          placeholder="Senha"
          name="senha"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="confirmaPassword"
          placeholder="Confirmar senha"
          name="confirmacao"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary">Criar Conta</button>
      </div>
    </form>
    <div class="d-flex justify-content-center">
      
      <p class="form-text">Já possui cadastro?</p>
    </div>

    <div class="d-flex justify-content-center">
      <router-link class="text-white" to='/'>Realizar Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
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