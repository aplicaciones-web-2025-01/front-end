<template>
  <div class="home-view">
    <AppHeader />
    <div class="content-wrapper">
      <sidebar />
      <main class="main-content">
        <task-list />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/the-header.component.vue';
import AppFooter from '@/components/the-footer.component.vue';
import Sidebar from '@/components/the-sidebar.component.vue';
import TaskList from '@/components/task-list.component.vue';
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
