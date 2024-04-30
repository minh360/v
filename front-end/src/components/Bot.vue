<template>
  <div class="rounded-[10px] h-[200px] bg-[white] relative">

    <div class="text-center font-bold text-[red] text-[25px]">{{ bot.ingame }}</div>

    <div class="flex flex-col items-center w-full gap-[10px]" v-if="bot.status == STATUS.FREE">
      <div v-if="bot.id_boss == bot.id_player">{{ format(bot.coin) }} xu</div>
      <div class="flex flex-row gap-[5px]">
        <button @click="changeStatus(STATUS.TRADE, zin)" class="px-[10px]">Đặt</button>
        <button @click="changeStatus(STATUS.SEND, zin)" class="px-[10px]"
          v-if="bot.id_boss == bot.id_player && bot.coin != 0">Rút</button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-[10px] h-full w-full gap-[10px]"
      v-if="bot.status == STATUS.SEND && bot.id_boss == bot.id_player">
      <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="coinSend"
        placeholder="Rút xu" v-on:keyup.enter="send(zin)" />
      <button @click="send(zin)" class="w-[30%]">Rút xu</button>
    </div>

    <div class="flex flex-col items-center w-full gap-[10px]"
      v-if="bot.status == STATUS.TRADE && bot.id_thue == bot.id_player">
      <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="bot.time_join"
        placeholder="Nhập số giây" />
      <input type="number" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="bot.coin_join"
        placeholder="Nhập số xu" v-on:keyup.enter="play(zin)" />
      <button @click="play(zin)" class="w-[30%]">Giao dịch</button>
    </div>

    <div class="flex flex-col items-center px-[20px] font-bold w-full gap-[10px]"
      v-if="bot.status == STATUS.BUSY && bot.id_thue == bot.id_player">
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

    <div class="font-bold text-[30px] mt-[50px]" v-if="bot.status == STATUS.TRADE && bot.id_thue != bot.id_player">
      Đang giao dịch ...
    </div>

    <div class="font-bold text-[30px] mt-[50px]" v-if="bot.status == STATUS.SEND_WIN && bot.id_thue != bot.id_player">
      Đang giao xu win . . .
    </div>

    <div class="font-bold text-[30px] mt-[50px]" v-if="bot.id_thue != bot.id_player && bot.status == STATUS.BUSY">
      Đã có khách thuê ạ
    </div>

    <div class="flex flex-col items-center px-[20px] font-bold w-full h-[50%] gap-[10px]"
      v-if="bot.status == STATUS.SEND_WIN && bot.id_thue == bot.id_player">
      <p class="text-[green]">Đã win rồi hãy giao dịch để lấy xu</p>
      <p>Win : {{ format(bot.coin_win) }} xu</p>
      <div class="flex flex-row justify-around w-full mt-[20px]">
        <button class="w-[50%]" @click="sendWin(zin)">Giao dịch</button>
        <button class="w-[40%]" v-if="bot.id_boss == bot.id_thue" @click="keepCoin(zin)">Giữ xu</button>
      </div>
    </div>

  </div>
</template>
<script setup>
import { socket } from '@/main';
import { defineProps,ref } from 'vue';
import { getPlayer } from '../../../backend/api';
import { STATUS } from '@/share';
const bot = defineProps({
  zin: Number,
  status: Number,
  id_boss: String,
  coin: Number,
  time_join: Number,
  coin_join: Number,
  status_join: Boolean,
  percent_join: Number,
  id_thue: String,
  id_player: String,
  ingame: String,
  coin_win : String
})
const coinSend = ref('')
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
const changeStatus = (status, index) => {
  socket.emit('changeStatus', { status: status, index: index, id_thue: bot.id_player })
}
const send = index => {
  if (coinSend.value <= bot.coin) {
    socket.emit('send', { coin: coinSend.value, index: index })
    coinSend.value = ''
  }
  else alert('Xu không đủ boss ơi')

}
const play = async index => {
  if (bot.time_join < 10 || bot.time_join > 120) {
    alert('Thời gian từ 11 đến 120 bạn ơi')
  }
  else if (bot.coin_join > 50000000 || bot.coin_join < 1000000) {
    alert('Đặt từ 1tr đến 50tr bạn ơi')
  }
  else {
    await getPlayer(bot.id_thue)
      .then(result => {
        if (bot.coin_join > result.data.coin) {
          alert('Không đủ xu mà đòi chơi')
        }
        else {
          bot.coin += Number(bot.coin_join)
          bot.status = STATUS.BUSY
          bot.id_thue = bot.id_player
          socket.emit('playBot', { item: bot, index: index })
        }
      })
  }
}
const keepCoin = index => {
  socket.emit('keepCoin', { coin: bot.coin_win, index: index })
}
const sendWin = index => {
  socket.emit('sendWin', { coin: bot.coin_win, index: index })
}
</script>
<style lang="scss" scoped>
button {
  border-radius: 10px;
  background-color: bisque;
  color: darkred;
  font-weight: 700;
  padding: 20 20px;
  height: 45px;
}
</style>