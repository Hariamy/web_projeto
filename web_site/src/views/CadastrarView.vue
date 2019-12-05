<template>
  <div class="login">
    <div class="externa">
      <Cadastrar />
    </div>
  </div>
</template>

<script>
import Cadastrar from '../components/Cadastrar'

export default {
  name: "cadastrar",
  components: {
    Cadastrar
  }
};
</script>

<style scoped>

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