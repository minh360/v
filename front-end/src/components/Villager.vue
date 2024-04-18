<template>
    <div class="bg-[Olive] w-full h-[620px] rounded-[25px] px-[20px] py-[10px]">
        <div @click="emits('closeVillager')" class="text-[30px] font-bold absolute right-0 px-[50px]">X</div>
        <div class="text-[30px] font-bold text-center">Khu thuê bot</div>
        <div class="rounded-[10px] w-[40%] h-[200px] bg-[white] relative">
            <div class="text-center font-bold text-[25px]">Ingame</div>

            <div class="text-[15px] cursor absolute top-[10px] right-0 px-[20px]">X</div>

            <div class="flex flex-col items-center w-full gap-[10px]" v-if="false">
                <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]"
                    v-model="message" placeholder="Nhập số giây" v-on:keyup.enter="chatClient()" />
                <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]"
                    v-model="message" placeholder="Nhập số xu" v-on:keyup.enter="chatClient()" />
                <button @click="showInput(true)" class="w-[30%]">Đặt</button>
            </div>

            <div class="flex flex-col items-center w-full gap-[10px]" v-if="false">
                <button @click="showInput(true)" class="w-[30%]">Đặt</button>
                <button @click="showInput(true)" class="w-[30%]">Nạp</button>
                <button @click="showInput(true)" class="w-[30%]">Rút</button>
            </div>

            <div class="flex flex-col items-center justify-center h-full w-full gap-[10px]" v-if="false">
                <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]"
                    v-model="message" placeholder="Số xu" v-on:keyup.enter="chatClient()" />
                <button @click="showInput(true)" class="w-[30%]">Nạp xu</button>
            </div>

            <div class="flex flex-col items-center justify-center h-full w-full gap-[10px]" v-if="true">
                <input type="text" class="w-[50%] border-1 border px-[10px] rounded h-[40px]"
                    v-model="message" placeholder="Rút xu" v-on:keyup.enter="chatClient()" />
                <button @click="showInput(true)" class="w-[30%]">Rút xu</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
const emits = defineEmits('oncloseVillager')
</script>
<style lang="scss" scoped>
button{
  border-radius: 10px;
  background-color: bisque;
  color: darkred;
  font-weight: 700;
  padding: 20 20px;
  height: 45px;
}
</style>