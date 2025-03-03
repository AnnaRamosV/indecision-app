<template>
    
    <div class="p-4 flex-1 overflow-y-auto">
        <div class="flex flex-col space-y-2">
            <Burbuja :meus-est="true" nuntius="¿Salimos a cenar?"/>

            <Burbuja :meus-est="false" 
            nuntius="no" 
            imago="https://yesno.wtf/assets/no/17-829284e9dd894ce9fb65fbe86d2e382c.gif"/>

        </div>
    </div>

    
          
        
  




</template>

<script lang="ts" setup>

import Burbuja from './Burbuja.vue';

</script>