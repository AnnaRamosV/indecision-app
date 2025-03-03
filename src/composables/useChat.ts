import type { ChatNuntius } from "@/components/interfaces/chat-nuntius.interface";
import type { YesNoResponsio } from "@/components/interfaces/yes-no-responsio";
import { somnum } from "@/helpers/somnum";
import { ref } from "vue";

export const useChat = () => {
   

const nuntii = ref<ChatNuntius[]>([]);

const aquiTienesTuRespuesta = async() => {
    const resp = await fetch("https://yesno.wtf/api")

    const data = await resp.json() as YesNoResponsio;

    return data
}


const unNuevoMensaje = async (texto: string) => {

    if(texto.length === 0) return;
    if(texto.endsWith("?")) return;

    nuntii.value.push({
        id: new Date().getTime(),
        nuntius: texto,
        meusEst: true,
      
    })

    await somnum (1.5)

    const {answer, image} = await aquiTienesTuRespuesta();

    

    nuntii.value.push({
        id: new Date().getTime(),
        nuntius: answer,
        meusEst: false,
        imago: image,
    })
}

return {
nuntii, 
unNuevoMensaje,

}
}