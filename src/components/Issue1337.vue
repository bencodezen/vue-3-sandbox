<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])

const close = () => emit('update:modelValue')
</script>

<template>
  <h1>
    <a href="https://github.com/vuejs/docs/issues/1337" target="_blank">
      Vue Docs Issue #1337
    </a>
    <button @click="close">Close</button>
  </h1>
</template>

<style></style>
