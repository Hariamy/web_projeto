<template>
  <div class="login">
    <div class="externa">
      <Login/>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  name: "Iniciar",
  components: {
    Login,
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