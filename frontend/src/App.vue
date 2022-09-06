<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/><hr>
  <br>

<!-- -------------------- development branch flo ------------------------ -->

  <router-link to="/signUpIn">  <img id="userIcon" src="./assets/user.svg"/>  </router-link>
  <router-link to="/userPanel">  <img id="userIcon" src="./assets/user.svg"/>  </router-link>

  <div class="content">  <router-view/>  </div>

<!-- place the components in a view, once the branch gwen has been merged -->
<!-- -------------------------------------------------------------------- -->

</template>



<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
#userIcon {
  width : 30px ;
  height : 30px ;
}
.content {
  margin : 30px ;
}
</style>
