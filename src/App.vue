<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <color-display r="255" g="0" b="0"></color-display>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ColorDisplay from './components/ColorDisplay'
export default {
  name: 'app',
  components: {
    Hello,
    ColorDisplay
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
  margin-top: 60px;
}
</style>
