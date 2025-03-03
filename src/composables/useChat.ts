import type { ChatNuntius } from "@/components/interfaces/chat-nuntius.interface";
import { ref } from "vue";

export const useChat = () => {
   

const nuntii = ref<ChatNuntius[]>([
  
]);

const unNuevoMensaje = (texto: string) => {
    nuntii.value.push({
        id: new Date().getTime(),
        nuntius: texto,
        meusEst: true,
    })
}

return {
nuntii, 
unNuevoMensaje,

}
}