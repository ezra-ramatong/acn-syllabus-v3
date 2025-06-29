<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
}>();
</script>

<template>
  <div class="svg-container">
    <img :src="src" :alt="alt || ''" />
  </div>
</template>

<style scoped>
.svg-container {
  background-color: white;
  display: inline-block;
  padding: 8px;
  border-radius: 4px;
  /* Optional: add subtle shadow in dark mode */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Make sure the image fits nicely */
.svg-container img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
