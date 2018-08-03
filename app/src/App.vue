<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import commonHeader from '@/components/common/header'
import commonBottom from '@/components/common/bottom'
import axios from 'axios'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;

}
body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  font-size: 0.4rem;
}
</style>
