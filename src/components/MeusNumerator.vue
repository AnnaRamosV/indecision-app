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
  import {computed, ref} from "vue";
  import {useNumerator} from '../composables/useNumerator';

  const {numerus, quadrataNumerus} = useNumerator(props.valorem);

  interface Props {
    valorem: number;
  }

  const props = defineProps<Props>();
   

</script>