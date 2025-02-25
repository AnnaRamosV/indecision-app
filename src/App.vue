<template>
  <h1>Mi primera app de Vue</h1>
  <MeusNumerator :valorem="5" />
  <MeusNumeratorScript :valorem="10"/>
</template>
<script lang="ts setup">
import MeusNumerator from "./components/MeusNumerator.vue"
import MeusNumeratorScript from "./components/MeusNumeratorScript.vue"

</script>