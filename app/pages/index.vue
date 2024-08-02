<script setup lang="ts">
definePageMeta({
  name: 'home',
})
</script>

<template>
  <main>
    <!-- <RedirectsPanel /> -->
    <MessagesPanel />

    <NuxtLink :to="{ name: 'client', params: { id: 'abd' } }">
      back to client
    </NuxtLink>
  </main>
</template>
