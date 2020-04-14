<template>
  <div id="app">
    
    
    <div class="router-display">
   <transition  name="fade">
  <router-view></router-view>
</transition>
    </div>
  </div>
</template>

<script>
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    HomePage,Login,Register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
}

</style>
