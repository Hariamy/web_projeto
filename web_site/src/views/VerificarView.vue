<template>
  <div class="login">
    <div class="externa">
      <Verificar />
    </div>
  </div>
</template>

<script>
import Verificar from '../components/Verificar'

export default {
  name: "VerificarView",
  components: {
    Verificar
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