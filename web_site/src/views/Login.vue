<template>
  <div class="login">
    <div class="externa">
      <div class="menuLogin float-md-right vh-100 d-flex flex-column justify-content-center">
        <div class="d-flex justify-content-center">
          <img alt="Logo" src="../assets/logo.png" />
        </div>
        <form>
          <div class="form-group">
            <input
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
              type="password"
              class="form-control"
              id="InputPassword1"
              placeholder="Senha"
              name="senha"
            />
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn btn-primary">Login</button>
          </div>

          <div class="d-flex justify-content-center">
            <small class="form-text">Ainda não possui cadastro?</small>
          </div>

          <div class="d-flex justify-content-center">
            <a href>Criar conta</a>
            <br />
          </div>
        </form>
      </div>
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
  background-color: rgba(255, 255, 255, 0.5);
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
  margin-bottom: 100px;
}
</style>