<template>
  <div class="hello" :style="style">
    {{ style }}
  </div>
</template>

<script>
export default {
  name: 'ColorDisplay',
  props: ['r', 'g', 'b'],
  computed: {
    style () {
      return `background: rgb(${this.r}, ${this.g}, ${this.b});`
    }
  }
}
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
}
</style>
