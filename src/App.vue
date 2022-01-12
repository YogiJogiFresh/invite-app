<template>
  <v-app id="app">
    <div class="flex-container">
      <!--- TODO Components --->
      <!--- Suit up Animation --->
      <!--- Reject Animation --->
      <Invitee name= "Tomek" />
      <Invitation />
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Invitation from './components/Invitation.vue';
import Invitee from './components/Invitee.vue';
@Component({
  components: {
    Invitee,
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
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 100vh;
}
::-webkit-scrollbar {
    display: none;
}
</style>
