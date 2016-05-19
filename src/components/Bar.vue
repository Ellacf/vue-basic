<template>
  <div class="bar">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
var alert = require('vue-strap').alert;
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'This is Bar!'
    }
  },
  components: {
    alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #42b983;
}
</style>
