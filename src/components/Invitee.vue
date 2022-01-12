<template>
  <div class="container">
    <div v-if="name == 'Khai'">
      <strike>
        <h1>Name 1</h1>
      </strike>
      <h1>Name 2</h1>
    </div>
    <div v-else>
        <h1>{{name}}</h1>
    </div>

    <h2>You have been chosen</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 props: {
     name: {
         type: Object,
         required: true
     }
 }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

.type-effect {
  border-right: solid 3px rgba(0,255,0,.75);
}

/* Animation */
.type-effect {
  animation: animated-cursor 600ms steps(29,end) infinite;
}

/* cursor animations */

@keyframes animated-cursor{
  from{border-right-color: rgba(0,255,0,.75);}
  to{border-right-color: transparent;}
}
</style>
