<template>
  <div class="backdrop-blur w-full flex justify-center items-center uppercase">
    <div class="absoluted top-0 mt-[100px] text-white border border-1 border-[black] rounded-[25px] w-[600px] h-auto mx-auto">
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
</template>
<script setup>
import {ref} from 'vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
const STATUS = {
  SIGN_IN: 1,
  SIGN_UP: 2
}
const status = ref(STATUS.SIGN_UP)
const setStatus = num => {
  status.value = num
}
</script>
<style scoped lang="scss">

.active {
  color: rebeccapurple
}
</style>