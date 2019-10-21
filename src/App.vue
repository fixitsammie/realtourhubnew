<template>
  <div id="app">
  
    
    
    <TVChartContainer/><ExchangeList/>
  </div>
</template>
<script>
import TVChartContainer from './components/TVChartContainer';
import ExchangeList from './components/ExchangeList';
export default {
  name: 'app',
  components: {ExchangeList,TVChartContainer
  },}

/*
<div id="nav">
     
      <router-link :to="{ name: 'tv' }">Chart tv</router-link>
      <router-link :to="{ name: 'exchanges' }">Exchange</router-link>
    </div>
    <router-view/>*/
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
