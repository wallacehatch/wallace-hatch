<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
  @import './styles/main.scss';
#app {
    min-height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
</style>
