<template>
  <div class="home-view">
    <AppHeader />
    <div class="content-wrapper">
      <sidebar />
      <main class="main-content">
        <task-list />
        <RighBar v-if="showRightBar"/>
      </main>
    </div>

    <button  @click="ToogleShowRightBar" value="toggle"></button>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/the-header.component.vue';
import AppFooter from '@/components/the-footer.component.vue';
import Sidebar from '@/components/the-sidebar.component.vue';
import TaskList from '@/components/task-list.component.vue';
import RighBar from '@/components/right-bar.component.vue';

const showRightBar = ref(false);

function ToogleShowRightBar()  {
    this.showRightBar = !showRightBar;
}

//function too..

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
