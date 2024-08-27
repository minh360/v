<template>
  <div class="bg-[olive] w-full h-[620px] rounded-[25px] px-[20px] py-[10px]">
    <div @click="emits('closeVillager')" class="text-[30px] cursor absolute right-0 px-[50px]">X</div>
    <div class="text-[30px] font-bold text-center">Khu thuê bot</div>
    <div class="grid grid-cols-3 w-full gap-[50px]" id="bot">
      <div class="rounded-[10px] h-[200px] bg-[white] relative" v-for="(fake, index) in list_fake" :key="index"
        v-if="list_fake != ''">
        <div class="flex flex-col items-center w-full gap-[50px] my-[50px]">
          <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="fake.ingame"
            placeholder="Tên bot" />
          <div class="text-[15px] cursor absolute top-[10px] right-0 px-[20px]" @click="deleteCreateBot(index)">X</div>
          <button @click="createBot2(fake.ingame, index)" class="w-[30%]">Tạo bot</button>
        </div>
      </div>
      <Bot v-for="(bot, zin) in list_bot" :key="bot" 
          :zin = zin 
          :status = bot.status
          :id_boss = bot.id_boss
          :coin = bot.coin
          :time_join = bot.time_join
          :coin_join = bot.coin_join
          :status_join = bot.status_join
          :percent_join = bot.percent_join
          :id_thue = bot.id_thue
          :id_player = id_player
          :ingame = bot.ingame
          :coin_win="bot.coin_win"
      />
    </div>
    <div>
      <button class="w-[200px] mb-[20px] absolute bottom-0 ml-[-100px]" @click="createBot1()">Tạo bot</button>
    </div>
  </div>
</template>
<script setup>
import Bot from './Bot.vue';
import { socket } from '@/main';
import { ref, defineEmits, onMounted } from 'vue';
import { checkExist } from '../../../backend/api';
const list_fake = ref([])

const emits = defineEmits('oncloseVillager')
const id_player = ref(sessionStorage.getItem('id_player'))
const ingameClient = ref(sessionStorage.getItem('ingame_client'))
const list_bot = ref([])
const deleteCreateBot = index => {
  list_fake.value.splice(index, 1)
}
const createBot1 = () => {
  list_fake.value.unshift({ ingame: '', mode: true })
}
const createBot2 = async (ingame, index) => {
  await getPlayer(id_player.value)
        .then(result =>{
          console.log(result.data.coin >= 2000000000,result.data.coin)
          if(result.data.coin >= 2000000000){
            await checkExist(ingame)
              .then(result => {
                if (!result) {
                  const data = {
                    ingame: ingame,
                    id_boss: id_player.value,
                    ingame_boss: ingameClient.value
                  }
                  socket.emit('addBotCreate', data)
                  deleteCreateBot(index)
                }
                else alert('Ingame đã tồn tại')
              })
            }
            else alert('Hãy để dành 2 tỷ xu để tạo')
            })
}

socket.on('updateListBotCreate', list => {
  list_bot.value = list
})
onMounted(async () => {
  setTimeout(() => {
    socket.emit('loadListBotCreate')
  }, 500)
})
</script>
<style lang="scss" scoped>
#bot {
  overflow-x: hidden;
  overflow-y: visible;
  height: 500px;
}

button {
  border-radius: 10px;
  background-color: bisque;
  color: darkred;
  font-weight: 700;
  padding: 20 20px;
  height: 45px;
}
</style>