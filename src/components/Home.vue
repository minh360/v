<template>
  <div class="w-full h-full bg-[#3399FF] background ">
    <div class="flex justify-center items-center h-full text-[50px] uppercase text-[blue]">
      <div class="hover:bg-[#7195AF] cursor-pointer bg-opacity-0 
        rounded-[20px] border border-solid border-4 border-red-800 p-[10px]" @click="setStatus(STATUS.SIGN_UP)">
        Bắt đầu
      </div>
    </div>
    <div class="absolute backdrop-blur w-full h-full top-0" v-if="status != STATUS.FREE">
      <div
        class="mt-[100px] text-white border border-1 border-[black] rounded-[25px] w-[600px] h-auto mx-auto">
        <div class="uppercase p-[20px] w-full h-[60px] flex justify-around text-[35px]">
          <div class="cursor-pointer font-bold" :class="{ active: STATUS.SIGN_UP == status }"
            @click="setStatus(STATUS.SIGN_UP)">
            Đăng ký
          </div>
          <div class="cursor-pointer font-bold" :class="{ active: STATUS.SIGN_IN == status }"
            @click="setStatus(STATUS.SIGN_IN)">
            Đăng nhập
          </div>
        </div>
        <div class=" mt-[30px] h-full border border-0 rounded-[25px]">
          <SignIn v-if="STATUS.SIGN_IN == status" />
          <SignUp v-if="STATUS.SIGN_UP == status" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
const STATUS = {
  FREE: 0,
  SIGN_IN: 1,
  SIGN_UP: 2
}
const status = ref(STATUS.FREE)
const setStatus = num => {
  status.value = num
}
</script>
<style scoped>
.background {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.active {
  color: rebeccapurple
}
</style>
