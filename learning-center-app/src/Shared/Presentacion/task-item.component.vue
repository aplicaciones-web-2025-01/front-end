<template>
  <div class="task-item">
    {{ task }}
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.task-item {
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
}
</style>
