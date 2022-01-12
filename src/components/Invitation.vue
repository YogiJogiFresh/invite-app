<template>
  <div class="container">
    <div :class="showAcceptHover ? 'fade-in' : 'fade-out'">
      <p v-if="showAcceptHover" >Follow your &#128151;</p>
      <p v-else>Be cool &#128148;</p>
    </div>
    <div class="action">
      <v-btn text color="success" 
        @mouseover="showAcceptHover = true" 
        >Accept</v-btn>
      <v-btn text color="error"
        @mouseover="showAcceptHover = false" 
        >Decline</v-btn>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend ({
  data() {
    return {
      showAcceptHover: true,
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

.fade-in {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.fade-out {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0;}
}

@-webkit-keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0;}
}


</style>
