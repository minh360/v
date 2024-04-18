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
      mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
                    placeholder="******************">
            </div>
            <p v-if="message != ''">{{ message }}</p>
            <div class="flex items-center justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded focus:outline-none focus:shadow-outline" type="button" @click="signIn()">
                    Đăng nhập
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { checkExist } from '../../../backend/api';
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
const signIn = async () => {
  checkError()
  if(message.value === ''){
    await checkExist(ingame.value)
        .then(player => {
          message.value = 'Đăng nhập thành công tài khoản '+ ingame.value
          sessionStorage.setItem('id_player',player.data._id)
          sessionStorage.setItem('ingame_client',player.data.ingame)
          setTimeout(()=>location.reload(),2000)
        })
        .catch(err =>{
            message.value = 'Tài khoản hoặc mật khẩu không chính xác'
            console.log(err.response.data)
        });
  }
}
</script>
<style scoped lang="scss"></style>
