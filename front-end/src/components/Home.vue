<template>
  <div class="w-full h-full bg-[#3399FF] background">
    <div v-if="!isLogined" class="h-full w-full">
      <Lobby />
    </div>
    <div v-else>
      <div class="h-[100px] px-[30px] text-white text-[30px] font-bold backdrop-blur flex flex-col justify-center items-end">
        <div class="flex flex-row gap-[30px]">
          <span class="text-[brown] absolute left-[50px]">Chào mừng bạn {{ ingameClient }}</span>
          <span class="cursor" @click="()=>showVillager = true">Làng thuê bot</span>
          <span @click="()=>showChat = true" class="cursor">Chat</span>
          <span class="cursor" @click="signOut()">Đăng xuất</span>
        </div>
      </div>
      <div class="text-center flex justify-center">
        <div>
          <Play />
        </div>
        <div class="absolute flex w-[80%]">
          <Chat v-if="showChat" @close-chat="()=>showChat = false"/>
          <Villager v-if="showVillager" @close-villager="()=>showVillager = false" />
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
import Villager from './Villager.vue'

const isLogined = ref(sessionStorage.getItem('id_player') ? true : false)
const ingameClient = ref(sessionStorage.getItem('ingame_client'))
const showChat = ref(false)
const showVillager = ref (false)

const signOut = () =>{
  sessionStorage.removeItem('id_player')
  sessionStorage.removeItem('ingame_client')
  location.reload()
}
</script>
<style scoped>
.background {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
