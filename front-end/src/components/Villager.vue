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
          <button @click="createBot2(fake.ingame,index)" class="w-[30%]">Tạo bot</button>
        </div>
      </div>
      <div class="rounded-[10px] h-[200px] bg-[white] relative" v-for="(bot, zin) in list_bot" :key="zin">

        <div class="text-center font-bold text-[red] text-[25px]">{{ bot.ingame }}</div>
        
        <div class="text-[15px] cursor absolute top-[10px] right-0 px-[20px]" v-if="bot.coin == 0 && bot.status == STATUS.FREE">X</div>

        <div class="flex flex-col items-center w-full gap-[10px]" v-if="bot.status == STATUS.FREE">
          <div>{{ format(bot.coin) }} xu</div>
          <div class="flex flex-row gap-[5px]">
            <button @click="changeStatus(STATUS.TRADE,zin)" class="px-[10px]">Đặt</button>
            <button @click="changeStatus(STATUS.DONATE,zin)" class="px-[10px]" v-if="bot.id_boss == id_player">Nạp</button>
            <button @click="changeStatus(STATUS.SEND,zin)" class="px-[10px]" v-if="bot.id_boss == id_player">Rút</button>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-[10px] h-full w-full gap-[10px]"
          v-if="bot.status == STATUS.DONATE">
          <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="coinDonate"
            placeholder="Số xu" v-on:keyup.enter="donate(zin)" />
          <button @click="donate(zin)" class="w-[30%]">Nạp xu</button>
        </div>

        <div class="flex flex-col items-center justify-center mt-[10px] h-full w-full gap-[10px]"
          v-if="bot.status == STATUS.SEND">
          <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="coinSend"
            placeholder="Rút xu" v-on:keyup.enter="send(zin)" />
          <button @click="send(zin)" class="w-[30%]">Rút xu</button>
        </div>

        <div class="flex flex-col items-center w-full gap-[10px]"
          v-if="bot.status == STATUS.TRADE && bot.id_thue == id_player">
          <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="bot.time_join"
            placeholder="Nhập số giây" />
          <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="bot.coin_join"
            placeholder="Nhập số xu" v-on:keyup.enter="play(zin)" />
          <button @click="play(zin)" class="w-[30%]">Giao dịch</button>
        </div>

        <div class="flex flex-col items-center px-[20px] font-bold w-full gap-[10px]"
          v-if="bot.status == STATUS.BUSY && bot.id_thue == id_player">
          <p>
          <p class="text-[red] whitespace-pre-line">Trạng thái :</p>&#10;&#13;{{ bot.status_join ? "Đã đặt" :
      "Chưa đặt" }}</p>
          <p>
          <p class="text-[red] whitespace-pre-line">Số xu đặt :</p>&#10;&#13;{{ format(bot.coin_join) }} xu
          </p>
          <p>
          <p class="text-[red] whitespace-pre-line">Tỉ lệ thắng :</p>&#10;&#13;{{ bot.percent_join.toFixed(5)
          }} %</p>
        </div>

        <div class="font-bold text-[30px] mt-[50px]"
          v-if="bot.status == STATUS.TRADE && bot.id_thue != id_player">
          Đang giao dịch ...
        </div>

        <div class="font-bold text-[30px] mt-[50px]"
          v-if="bot.status == STATUS.SEND_WIN && bot.id_thue != id_player">
          Đang giao xu win . . .
        </div>

        <div class="font-bold text-[30px] mt-[50px]"
          v-if="bot.id_thue != id_player && bot.status == STATUS.BUSY">
          Đã có khách thuê ạ
        </div>

        <div class="flex flex-col items-center px-[20px] font-bold w-full h-[50%] gap-[10px]"
          v-if="bot.status == STATUS.SEND_WIN && bot.id_thue == id_player">
          <div v-if="bot.ingame == lastPlayerWin">
            <p class="text-[green]">Đã win rồi hãy giao dịch để lấy xu</p>
            <p>Win : {{ format(lastCoinWin) }} xu</p>
            <div class="flex flex-row justify-around w-full mt-[20px]">
              <button class="w-[50%]" @click="sendWin(zin)">Giao dịch</button>
              <button class="w-[40%]" v-if="bot.id_boss == bot.id_thue" @click="keepCoin(zin)">Giữ xu</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div>
      <button class="w-[200px] mb-[20px] absolute bottom-0 ml-[-100px]" @click="createBot1()">Tạo bot</button>
    </div>
  </div>
</template>
<script setup>
import { socket } from '@/main';
import { STATUS } from '@/share';
import { ref, defineEmits, onMounted } from 'vue';
import { checkExist } from '../../../backend/api';
const lastPlayerWin = ref('')
const lastCoinWin = ref('')
const list_fake = ref([])
const coinDonate = ref('')
const coinSend = ref('')
const emits = defineEmits('oncloseVillager')
const id_player = ref(sessionStorage.getItem('id_player'))
const ingameClient = ref(sessionStorage.getItem('ingame_client'))
const list_bot = ref([])
const deleteCreateBot = index =>{
  list_fake.value.splice(index,1)
}
const createBot1 = () => {
  list_fake.value.unshift({ ingame: '', mode: true })
}

const createBot2 = async (ingame,index) => {
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

const changeStatus = (status,index) =>{
  socket.emit('changeStatus',{status : status,index : index,id_thue : id_player.value})
}
const donate = index =>{
  socket.emit('donate',{coin : coinDonate.value,index : index})
  coinDonate.value = ''
}
const send = index =>{
  socket.emit('send',{coin : coinSend.value,index : index})
  coinSend.value = ''
}
const play = index => {
  list_bot.value[index].coin += Number(list_bot.value[index].coin_join)
  list_bot.value[index].status = STATUS.BUSY
  list_bot.value[index].id_thue = id_player.value
  socket.emit('playBot',{list : list_bot.value,index: index})
}
const keepCoin = index =>{
  socket.emit('keepCoin',{coin :lastCoinWin.value,index: index })
}
const sendWin = index =>{
  socket.emit('sendWin',{coin: lastCoinWin.value,index: index })
}
socket.on('updateListBotCreate', list => {
  list_bot.value = list
})

const format = number => {
  let result = ''
  const len = number.toString().length
  for (let i = 1; i <= len; i++) {
    result = number.toString()[len - i] + result
    if (i % 3 === 0 && i !== len) {
      result = ',' + result
    }
  }
  return result
}
socket.on('sendLastWin', lastWin => {
  lastPlayerWin.value = lastWin.ingame
  lastCoinWin.value = lastWin.coinWin
})
onMounted(async () => {
  setTimeout(() => {
    socket.emit('updateLastWin')
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