<template>
    <div class="bg-[gray] w-full h-[620px] rounded-[25px] relative py-[10px]">
        <div @click="emits('closeChat')" class="text-[30px] font-bold absolute right-0 px-[50px]">X</div>
        <div class="text-[30px] font-bold text-center">Chat</div>
        <div ref="data" id="data" class="flex flex-col px-[50px] text-[20px] cursor">
            <div v-for="(chat,index) in list_chat" :key="index" :class="{left : chat.ingame == chat.ingameClient}">
                <div class="text-right text-[violet]">{{ chat.ingame }}</div>
                <div class="text-right text-[gray]">{{ chat.message }}</div>
            </div>
        </div>
        <input type="text" class="w-[500px] mt-[10px] px-[20px] rounded h-[40px]" 
            v-model="message" placeholder="Nhập tin nhắn"
            v-on:keyup.enter="chatClient()"/>
    </div>
</template>
<script setup>
import { ref, defineEmits, onMounted } from 'vue';
const emits = defineEmits('oncloseChat')
const data = ref(null)
const message = ref('')
const loadMoreMessge = ref([])
const ingameClient = ref(sessionStorage.getItem('ingame_client'))
const list_chat = ref(JSON.parse(sessionStorage.getItem('list_chat')) == null ? [] : JSON.parse(sessionStorage.getItem('list_chat')))
const scrollBottom = value =>{
    if(loadMoreMessge || value == true ){
        setTimeout(()=>{
            const elem = document.getElementById('data');
            elem.scrollTop = elem.scrollHeight;
        },500)
    }
}
const chatClient = () =>{
    list_chat.value.push({ingame : sessionStorage.getItem('ingame_client'),message: message.value})
    scrollBottom(true)
    message.value = ''
    sessionStorage.setItem('list_chat',JSON.stringify(list_chat.value))
}
const onScroll = ({ target: { scrollTop, clientHeight, scrollHeight }}) => {
    if (scrollTop + clientHeight >= scrollHeight) {
        loadMoreMessge.value = true;
    }
    else{
        loadMoreMessge.value = false
    }
  };

onMounted(() => {
    data.value.addEventListener('scroll', onScroll);
    scrollBottom()
});
</script>
<style lang="scss" scoped>
#data {
    overflow-x:hidden;
    overflow-y:visible;
    height:500px;
    background-color: bisque
}
.left{
    text-align: left;
}
</style>