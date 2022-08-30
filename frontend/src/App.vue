<template>
  <pageAccueil></pageAccueil>
</template>

<script>
import pageAccueil from './components/pageAccueil.vue'

export default {
  name: 'App',
  components: {
    pageAccueil
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
