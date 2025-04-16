<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

</script>

<template>
<ul>{{ text}}</ul>
</template>

<style scoped>

</style>