<script setup lang="ts">
// async function uploadImage(e: Event) {
//   // https://hub.nuxt.com/docs/storage/blob#useupload
//   const upload = useUpload('/api/images/upload', {
//     multiple: false,
//   })
//   const form = e.target as HTMLFormElement
//   await upload(form.image)
//     .then(async () => {
//       form.reset()
//       await refresh()
//     }).catch(err => alert(`Failed to upload image:\n${err.data?.message}`))
// }

// async function deleteImage(pathname: string) {
//   await $fetch(`/api/images/${pathname}`, { method: 'DELETE' })
//   await refresh()
// }
</script>

<template>
  <div>Gallery</div>
  <!-- <div>
  </div> -->
</template>
