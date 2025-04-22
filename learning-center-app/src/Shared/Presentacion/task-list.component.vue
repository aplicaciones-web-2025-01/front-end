<template>
  <section class="task-list">
    <task-item v-for="(task, index) in tasks" :key="index" :task="task"/>
  </section>
</template>

<script setup>
import TaskItem from './task-item.component.vue';

const tasks = [
  'Return Book A',
  'Organize Shelves',
  'Submit Report',
];
</script>

<style scoped>
.task-list {
  padding: 1rem;
  background-color: #fff;
}
</style>
