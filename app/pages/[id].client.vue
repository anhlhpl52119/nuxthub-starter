<script setup lang="ts">
definePageMeta({
  name: 'client',
})
</script>

<template>
  <NuxtLink :to="{ name: 'home' }">
    back to home
  </NuxtLink>
</template>
