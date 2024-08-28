<script setup lang="ts">
const { $api } = useNuxtApp()

const { data } = useAsyncData(async ()=> {
  return await $api('/api', { timeout: 5000 })
})
</script>

<template>
{{ data }}
</template>