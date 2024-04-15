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
import {socket} from "@/main";
import {checkExist,addNewAccount} from '../../../backend/api'
const ingame = ref('')
const password = ref('')
const message = ref('')

const checkError = () => {
  let regex = /^[a-z\d]+$/
  if(ingame.value == '')
    message.value = 'Vui lòng nhập Ingame!!!'
  else if(ingame.value.length < 6 || ingame.value.length >10 )
    message.value = 'Độ dài Ingame phải từ 6 đến 10 kí tự'
  else if(password.value == '')
    message.value = 'Vui lòng nhập Password!!!'
  else if(!regex.test(ingame.value))
    message.value = 'Ingame phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!'
  else message.value = ''
}
const signUp = async () => {
  checkError()
  if(message.value === ''){
    let player_exist
    await checkExist(ingame.value)
        .then(result =>{
          player_exist = result.data
        })
        .catch(err =>
            console.log(err.response.data)
        );
        message.value = player_exist ? 'Ingame đã tồn tại' : ''
    if(!player_exist){
      await addNewAccount(ingame.value,password.value)
        .then(result =>{
          message.value = 'Đăng ký thành công'
        })
        .catch(err =>
            console.log(err.response.data)
        );
    }
  }
}
</script>
<style scoped lang="scss">

</style>
