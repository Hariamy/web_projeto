<template>
  <div id="app">
    <Signup></Signup>
  </div>
</template>

<script>
import Signup from './components/Signup.vue'

export default {
  name: 'app',
  components: {
    Signup,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
