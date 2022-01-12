<template>
  <div class="container">
    
    <div v-if="name == 'Khai'">
      <strike>
        <h1>Name 1</h1>
      </strike>
      <h1>Name 2</h1>
    </div>
    <h1 v-else>{{name}}</h1>

    <h2>You've been chosen</h2>
    <div class="action">
      <v-btn text color="success">Accept</v-btn>
      <v-btn text color="error">Decline</v-btn>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Invitation extends Vue {
  @Prop() private name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
