<script setup lang="ts">
definePageMeta({
  name: 'client',
})
</script>

<template>
  <NuxtLink :to="{ name: 'home' }">
    home page
  </NuxtLink>
</template>
