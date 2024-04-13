<template>
    <div class="w-full h-full text-white">
  <form class=" rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col ">
    <div class="mb-4">
      <label class="block text-sm font-bold mb-2" for="username">
        Ingame
      </label>
      <input v-model="ingame" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingame">
    </div>
    <div class="mb-6">
      <label class="block text-sm font-bold mb-2" for="password">
        Mật khẩu
      </label>
      <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
    </div>
    <p v-if="message != ''">{{ message }}</p>
    <div class="flex items-center justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded focus:outline-none focus:shadow-outline" type="button" @click="signUp()">
        Đăng ký
      </button>
    </div>
  </form>
</div>
</template>
<script setup>
import {ref} from 'vue'
const ingame = ref('')
const password = ref('')
const message = ref('')
const signUp = () => {
    
}
</script>
<style scoped lang="scss">

</style>
