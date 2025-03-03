<template>
    <h1>IndecisionVue</h1>

<section class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">

        <div class="bg-blue-500 p-4 text-white flex justify-between items-centered">
            <span> La Wife</span>
        </div>

     <ChatMensajes :nuntii="nuntii"/>   
     <CajaMensajes/>

    
</section>
</template>

<script lang="ts" setup>
import CajaMensajes from '@/components/chat/CajaMensajes.vue';
import ChatMensajes from '@/components/chat/ChatMensajes.vue';
import type { ChatNuntius } from '@/components/interfaces/chat-nuntius.interface';
import { ref } from 'vue';

const nuntii = ref<ChatNuntius[]>([
    {
        id: new Date().getTime(),
        nuntius: "Quiéres ir a tomar café?",
        meusEst: true,
    },

    {
        id: new Date().getTime() + 1,
        nuntius: "No",
        meusEst: false,
        imago: "https://yesno.wtf/assets/no/17-829284e9dd894ce9fb65fbe86d2e382c.gif"
    },
])


</script>