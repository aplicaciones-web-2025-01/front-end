<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

</script>

<template>
<li>{{ text}}</li>
</template>

<style scoped>

</style>