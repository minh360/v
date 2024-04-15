<template>
  <div class="w-full h-full bg-[#3399FF] background">
    <div v-if="!isLogined" class="h-full w-full">
      <Lobby />
    </div>
    <div v-else>
      <Play />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Lobby from './Lobby.vue'
import Play from './Play.vue'

const isLogined = ref(false)

</script>
<style scoped>
.background {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>
