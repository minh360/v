<template>
    <div class="bg-[olive] w-full h-[620px] rounded-[25px] px-[20px] py-[10px]">
        <div @click="emits('closeVillager')" class="text-[30px] cursor absolute right-0 px-[50px]">X</div>
        <div class="text-[30px] font-bold text-center">Khu thuê bot</div>
        <div class="grid grid-cols-3 w-full gap-[50px]" id="bot">
            <div class="rounded-[10px] h-[200px] bg-[white] relative" v-for="(bot,index) in list_bot" :key="index">
                <div class="text-center font-bold text-[red] text-[25px]">{{ bot.ingame }}</div>

                <div class="text-[15px] cursor absolute top-[10px] right-0 px-[20px]" v-if="bot.coin == 0">X</div>

                <div class="flex flex-col items-center w-full gap-[10px]" v-if="false">
                    <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="time"
                        placeholder="Nhập số giây" v-on:keyup.enter="chatClient()" />
                    <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="coin"
                        placeholder="Nhập số xu" v-on:keyup.enter="chatClient()" />
                    <button @click="showInput(true)" class="w-[30%]">Giao dịch</button>
                </div>

                <div class="flex flex-col items-center w-full gap-[10px]" v-if="false">
                    <button @click="showInput(true)" class="w-[30%]">Đặt</button>
                    <button @click="showInput(true)" class="w-[30%]" v-if="bot.ingame_boss == ingameClient">Nạp</button>
                    <button @click="showInput(true)" class="w-[30%]" v-if="bot.ingame_boss == ingameClient">Rút</button>
                </div>

                <div class="flex flex-col items-center justify-center h-full w-full gap-[10px]" v-if="false">
                    <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="coin"
                        placeholder="Số xu" v-on:keyup.enter="chatClient()" />
                    <button @click="showInput(true)" class="w-[30%]">Nạp xu</button>
                </div>

                <div class="flex flex-col items-center justify-center h-full w-full gap-[10px]" v-if="false">
                    <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]" v-model="coin"
                        placeholder="Rút xu" v-on:keyup.enter="chatClient()" />
                    <button @click="showInput(true)" class="w-[30%]">Rút xu</button>
                </div>

                <div class="flex flex-col items-center px-[20px] font-bold w-full gap-[10px]" v-if="true">
                    <p><p class="text-[red] whitespace-pre-line">Trạng thái :</p>&#10;&#13;{{ bot.status_join ? "Đã đặt" : "Chưa đặt" }}</p>
                    <p><p class="text-[red] whitespace-pre-line">Số xu đặt :</p>&#10;&#13;{{ format(bot.coin_join) }} xu</p>
                    <p><p class="text-[red] whitespace-pre-line">Tỉ lệ thắng :</p>&#10;&#13;{{ 2.25235235235.toFixed(percent_join) }} %</p>
                </div>

                <span class="font-bold text-[30px]" v-if="bot.status == STATUS.TRADE && bot.ingame">
                    Đang giao dịch ...
                </span>

                <span class="font-bold text-[30px]" v-if="bot.ingame_thue != ingameClient && bot.STATUS == STATUS.BUSY">
                    Đã có khách thuê ạ
                </span>

                <div class="flex flex-col items-center px-[20px] font-bold w-full h-[50%] gap-[10px]" v-if="false">
                    <div v-if="false">
                        <p class="text-[green]" v-if="bot.ingame != name">Đã win rồi hãy giao dịch để lấy xu</p>
                        <div v-else>
                            <p>Tạch rồi bạn ơi</p>
                            <p>Gấp đôi thôi!!!</p>
                        </div>
                        <p>Win : {{ format(3000000) }} xu</p>
                        <div class="flex flex-row justify-around w-full mt-[20px]">
                            <button class="w-[50%]">Giao dịch</button>
                            <button class="w-[40%]" v-if="bot.ingame_thue == ingameClient">Giữ xu</button>
                        </div>
                    </div>
                    <div v-else class="text-[red] h-full flex flex-col justify-center">
                        
                    </div>
                </div>
            </div>
        </div>
        <div>
            Tạo bot
        </div>

    </div>
</template>
<script setup>
import { STATUS } from '@/share';
import { ref, defineEmits } from 'vue';
const emits = defineEmits('oncloseVillager')
const ingameClient = ref(sessionStorage.getItem('ingame_client'))
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
<style lang="scss" scoped>
#bot{
    overflow-x:hidden;
    overflow-y:visible;
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