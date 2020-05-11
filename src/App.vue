<template>
  <div id="app">
<span v-if="isLoggedIn">  <a @click="logout">Logout</a></span>
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
  }, computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/auth/login')
                })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
}

</style>
