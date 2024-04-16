<template>
  <div class="w-full h-full bg-[#3399FF] background">
    <div v-if="!isLogined" class="h-full w-full">
      <Lobby />
    </div>
    <div v-else>
      <div class="flex w-full">
        <div>
          <Play />
        </div>
        <div class="flex-grow">
          <Chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Lobby from './Lobby.vue'
import Play from './Play.vue'
import Chat from './Chat.vue'

const isLogined = ref(true)

</script>
<style scoped>
.background {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
