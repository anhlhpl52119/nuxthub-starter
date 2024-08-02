<script setup lang="ts">
defineNuxtComponent({
  ssr: false,
})
</script>

<template>
  <NuxtLink :to="{ name: 'home' }">
    back to home
  </NuxtLink>
</template>
