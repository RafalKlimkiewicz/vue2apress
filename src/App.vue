<template>
  <StoreComponent  />
</template>

<script>

import StoreComponent  from './components/StoreComponent';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { 
    StoreComponent 
  },
  methods: {
    ...mapActions(["getData"])
  },
  created(){
    this.getData();
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


