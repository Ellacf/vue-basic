<template>
  <input type="checkbox" v-model="checked">
<label for="checked">Open only one at a time.</label>

<accordion :one-at-atime="checked">
  <panel header="Panel #1" :is-open="true">
    ...11111
  </panel>
  <panel header="Panel #2">
    ...22222
  </panel>
  <panel header="Panel #3">
    ...33333
  </panel>
  <panel header="Panel #4">
    ...44444
  </panel>
</accordion>
</template>
<script>
var accordion = require('vue-strap').accordion;
var panel = require('vue-strap').panel;
export default {
  data () {
    return {
      checked: true
    }
  },
  components: {
    accordion,panel
  }
};
</script>
