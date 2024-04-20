<script setup>
import { socket } from '@/main';
import { computed, onMounted, ref } from 'vue';
import { getPlayer } from '../../../backend/api';
const stylePercent = computed(() => {
    return {
        'margin' : '-2px 0 0 0',
        'backgroundColor': 'red',
        'width': percent.value + '%',
        'height': "25px",
        'borderRadius': percent.value === 100 ? '25px' : '15px 0 0 15px',
        'position': 'relative',
        'transition': 'width 1s'
    }
})
const message = ref('Chào mừng đến với vòng xoay may rủi')
const timeCountDownMilli = ref(0)
const ingameClient = ref(sessionStorage.getItem('ingame_client'))

const percent = ref(0)
const coin = ref (0)
const totalCoins = ref(0)

const coinJoin = ref(0)
const countPlayerJoin = ref(0)

const lastCoinJoin = ref(0)
const lastPlayerWin = ref(0)
const lastCoinWin = ref(0)
const coinInput = ref(0)

const minute = computed(()=>{
  const minute = Math.floor(timeCountDownMilli.value / 60 % 60)
  return minute < 10 ? '0' + minute : minute
})
const second = computed(()=>{
  const second = Math.floor(timeCountDownMilli.value % 60)
  return second < 10 ? '0' + second : second
})

const isInputed = ref(false)
const showInput = value => {
    isInputed.value = value
}

const id_player = ref(sessionStorage.getItem('id_player'))

const play = () =>{
    socket.emit('play',{id_player: id_player.value,ingame: ingameClient.value, coinJoin: coinInput.value, coin: coin.value})
    coinInput.value = 0
}
const updateCoin = async() =>{
    await getPlayer(id_player.value)
        .then(result =>{
          coin.value = result.data.coin
        })
}
const format = (number) => {
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
socket.on('letgo',time =>{
    timeCountDownMilli.value = time
})
socket.on('reload',()=>{
    socket.emit('justDoIt',id_player.value)
})
socket.on('updatePlayerPlay', result =>{
    totalCoins.value = result[1]
    countPlayerJoin.value = result[2]
    coinJoin.value = result[0].coinJoin
    percent.value = result[0].percent
})
socket.on('updateCoin', async()=>{
    await updateCoin()
})
socket.on('sendLastWin',lastWin =>{
    lastPlayerWin.value = lastWin.ingame
    lastCoinJoin.value = lastWin.coinJoin
    lastCoinWin.value = lastWin.coinWin
    message.value = 'Chúc mừng '+ lastPlayerWin.value.toUpperCase() + 'đã chiến thắng '+ lastCoinWin.value + ' xu trong vòng quay may rủi'
})
onMounted(async ()=>{
    setTimeout(socket.emit('updateLastWin'),500)
    await updateCoin()
})

</script>

<template>
    <div class="w-[60vw] text-[20px] rounded-[50px] font-bold text-center bg-[rosybrown]">
        <div class="marquee mx-[20px]">
            <marquee>{{ message }}</marquee>
        </div>
        <div class="flex gap-[10px] flex-col items-center">
            <div class="text-[darkred] text-[30px] uppercase">Vòng quay may mắn
            </div>
            <div class="text-[pink]">Bạn đang có {{ format(coin) }} xu</div>

            <div class="text-[orange] text-[50px]">
                <span v-show="minute > 0">{{ minute }}:</span><span>{{ second }}<span v-show="minute <= 0">s</span></span>
            </div>
            <div class="text-[orange] font-bold">Tỉ lệ thắng</div>
            <div class="percent-wrapper">
                <div :style="stylePercent"></div>
                <div>{{ percent }} %</div>
            </div>
            <div class="mt-[15px]">{{ format(totalCoins) }} coin</div>
            <div>Số người tham gia: {{ countPlayerJoin }}</div>
            <div>Bạn đã tham gia: {{ format(coinJoin) }}</div>
            <div></div>
            <div>
                <div>Người vừa chiến thắng: {{ lastPlayerWin ? lastPlayerWin : 'Chưa có thông tin'}}</div>
                <div>Số coin thắng: {{ lastCoinWin ? format(lastCoinWin) : 'Chưa có thông tin' }}</div>
                <div>Số coin tham gia: {{ lastCoinJoin ? format(lastCoinJoin) : 'Chưa có thông tin'}}</div>
            </div>

            <div style="height: 2px"></div>

            <input type="number" class="pl-[20px] w-[500px] rounded h-[50px]" 
            v-if="isInputed" v-model="coinInput" placeholder="Tham gia từ 1tr đến 50tr"
            v-on:keyup.enter="play()"/>

            <button v-if="id_player && !isInputed" @click="showInput(true)" class="w-[30%] mb-[20px]">Tham gia</button>
            <div v-if="id_player && isInputed" class="flex mb-[20px]">
                <button class="cursor w-[200px]" @click="showInput(false)">Đóng</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.marquee {
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}

.percent-wrapper {
    border: 2px solid black;
    border-radius: 25px;
    height: 25px;
    width: 50%;
    margin: 0 auto;
    position: relative;
    background-color: black;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
button{
  border-radius: 10px;
  background-color: bisque;
  color: darkred;
  font-weight: 700;
  padding: 20 20px;
  height: 45px;
}
</style>