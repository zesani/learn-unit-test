<template lang="html">
  <div class="cal">
    {{result}}
  </div>
</template>

<script>
export default {
  name: 'cal',
  props: ['operator', 'operant1', 'operant2'],
  computed: {
    result () {
      switch (this.operator) {
        case '+':
          return this.operant1 + this.operant2
        case '-':
          return this.operant1 - this.operant2
        case '*':
          return this.operant1 * this.operant2
        case '/':
          return this.operant1 / this.operant2
      }
    }
  }
}
</script>
