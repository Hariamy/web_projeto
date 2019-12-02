<template>
  <div id="app">
    <Edit foto="perfil.png"></Edit>
  </div>
</template>

<script>
import Edit from './components/Edit.vue'

export default {
  name: 'app',
  components: {
    Edit,
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
