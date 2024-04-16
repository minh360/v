<template>
    <div class="w-[60vw] text-[20px] rounded-[50px] font-bold text-center bg-[rosybrown]">
        <div class="marquee mx-[20px]">
            <marquee>{{ message }}</marquee>
        </div>
        <div class="flex gap-[10px] flex-col items-center">
            <div class="text-[darkred] text-[30px] uppercase">Vòng quay may mắn
            </div>
            <div class="text-[red]">Bạn đang có {{ format(coin) }} xu</div>
            <div class="text-[orange] text-[50px]"><span v-show="minute > 0">{{ minute }}:</span><span>{{ second }}<span
                        v-show="minute <= 0">s</span></span></div>
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
                <div>Người vừa chiến thắng: {{ lastUserWin }}</div>
                <div>Số coin thắng: {{ format(lastCoinWin) }}</div>
                <div>Số coin tham gia: {{ format(lastCoinJoin) }}</div>
            </div>

            <div style="height: 2px"></div>

            <input type="number" class="pl-[20px] w-[500px] rounded h-[50px]" v-if="isInputed" v-model="coinInput" placeholder="Tham gia từ 1tr đến 50tr"/>

            <button v-if="id_player && !isInputed" @click="showInput(true)" class="w-[30%] mb-[20px]">Tham gia</button>
            <div v-if="id_player && isInputed" class="flex gap-[10px] mb-[20px]">
                <button class="cursor-pointer w-[290px]" @click="joinSeasonClient()">Tham gia</button>
                <button class="cursor-pointer w-[200px]" @click="showInput(false)">Đóng</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
const stylePercent = computed(() => {
    return {
        'margin' : '-2px 0 0 -1px',
        'backgroundColor': 'red',
        'width': percent.value + '%',
        'height': "25px",
        'borderRadius': percent.value === 100 ? '25px' : '15px 0 0 15px',
        'position': 'relative',
        'transition': 'width 1s'
    }
})
const message = ref('Chào mừng đến với vòng xoay may rủi')
const minute = ref()
const second = ref()
const percent = ref(0)
const coin = ref (50000000)
const totalCoins = ref(0)
const countPlayerJoin = ref(0)
const coinJoin = ref(0)
const lastUserWin = ref(0)
const lastCoinWin = ref(0)
const lastCoinJoin = ref(0)
const coinInput = ref('')


const isInputed = ref(false)
const showInput = value => {
    isInputed.value = value
}

const id_player = ref('4262756457er')


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
</script>
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