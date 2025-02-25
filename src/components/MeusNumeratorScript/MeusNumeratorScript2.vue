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

<script lang="ts" src="./MeusNumeratorScript2.ts"></script>