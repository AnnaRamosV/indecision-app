<template>
    <h1>IndecisionVue</h1>

<section class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">

        <div class="bg-blue-500 p-4 text-white flex justify-between items-centered">
            <span> La Wife</span>
        </div>

     <ChatMensajes :nuntii="nuntii"/>   
     <CajaMensajes v-on:mensaje-enviado="($event) => unNuevoMensaje($event)"/>

    
</section>
</template>

<script lang="ts" setup>
import CajaMensajes from '@/components/chat/CajaMensajes.vue';
import ChatMensajes from '@/components/chat/ChatMensajes.vue';
import { useChat } from '@/composables/useChat';

const {nuntii, unNuevoMensaje} = useChat();


</script>