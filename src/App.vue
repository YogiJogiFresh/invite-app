<template>
  <v-app id="app">
    <!--- Suit up Animation --->
    <Invitation name = "Hello" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Invitation from './components/Invitation.vue';

@Component({
  components: {
    Invitation,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Source Code Pro', monospace;  
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dddddd;
  background-color: #2e2c29;
  display: flex;
  justify-content: center;
  text-align: center;
}
::-webkit-scrollbar {
    display: none;
}
</style>
