<template>
  <div class="hello">
    <Cadastrar />
  </div>
</template>

<script>
import Cadastrar from './Cadastrar.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Cadastrar
  },
  data() {
    return {
      calcular: false, 
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
