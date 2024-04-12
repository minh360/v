<template>
  <div class="w-full h-full bg-[#3399FF] text-[blue] background">
    <div class="flex justify-center items-center h-full gap-[20px] uppercase " v-if="status == STATUS.FREE">
      <div class="hover:bg-[#7195AF] cursor-pointer text-[50px] bg-opacity-0 
        rounded-[20px] border border-solid border-4 border-red-800 p-[10px]">
        Đăng nhập
      </div>
      <div class="hover:bg-[#7195AF] cursor-pointer text-[50px] bg-opacity-0 
        rounded-[20px] border border-solid border-4 border-red-800 p-[10px]">
        Đăng ký
      </div>
    </div>
    <div v-if="status == STATUS.SIGN_IN">
      
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
const STATUS = {
  FREE: 0,
  SIGN_IN: 1,
  SIGN_UP: 2
}
const status = ref(STATUS.FREE)
</script>
<style scoped>
.background {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
