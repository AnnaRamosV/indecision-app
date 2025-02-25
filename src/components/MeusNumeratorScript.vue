<template>
  <section>
    <h3>Counter: {{numerus}}</h3>
    <h3>Sqaure: {{quadrataNumerus}}</h3>

    <div>
      <button @click="numerus++"></button>
      <button @click="numerus--"></button>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import {computed, ref, defineComponent} from "vue";

  export default defineComponent({
    props: {
      valorem: {type: Numbre, required: true}
    },

    setup(props){
    const numerus = ref(props.valorem);
    const quadrataNumerus = computed(() => numerus.value * numerus.value)
      return{
         numerus,
        quadrataNumerus,
      }
    }
  })


  interface Props {
    valorem: number;
  }

  

</script>