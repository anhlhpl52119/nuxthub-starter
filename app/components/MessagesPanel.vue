<script setup lang="ts">
const { data: messages, refresh } = await useFetch('/api/messages')
const newMessage = ref('')
const clientDate = ref(new Date().getTime())
async function sendMessage() {
  if (!newMessage.value.trim())
    return
  await $fetch('/api/messages', {
    method: 'POST',
    body: {
      text: newMessage.value,
    },
  })
  newMessage.value = ''
  await refresh()
}
</script>

<template>
  <div>
    <h3>Client {{ clientDate }}</h3>
    <h3>Messages</h3>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Type a message">
      <button type="submit">
        Send
      </button>
    </form>
    <p v-for="message of messages" :key="message.id">
      {{ message.text }} - {{ new Date(message?.created_at ?? '').toLocaleString() }}
    </p>
    <p v-if="!messages?.length">
      No messages
    </p>
  </div>
</template>
