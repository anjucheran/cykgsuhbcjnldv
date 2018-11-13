<template>
  <div id="app">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Basic from "./components/Basic.vue"
import Logged from "./components/Logged.vue"
import { mapState } from 'vuex'

export default {
  components: {
    Basic,
    Logged
  },
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: mapState({
    currentComponent: 'currentComponent'
  }),
  mounted() {
    this.$store.dispatch('serverInit');
  }
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

h1, h2 {
  font-weight: normal;
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