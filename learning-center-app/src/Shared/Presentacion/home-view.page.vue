<template>
  <div class="home-view">
    <AppHeader/>
    <div class="content-wrapper">
      <Sidebar/>
      <main class="main-content">
        <form>
          <div>
            <input v-model="name" type="text" id="name"/>
            <label for="name">{{ name }}</label>
          </div>
        </form>
        <TaskList/>
        <RightBar v-if="showRightBar"/>
      </main>
    </div>

    <button @click="ToggleShowRightBar">
      {{ showRightBar ? 'Hide RightBar' : 'Show RightBar' }}
    </button>

    <AppFooter/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import AppHeader from '@/Shared/Presentacion/the-header.component.vue';
import AppFooter from '@/Shared/Presentacion/the-footer.component.vue';
import Sidebar from '@/Shared/Presentacion/the-sidebar.component.vue';
import TaskList from '@/Shared/Presentacion/task-list.component.vue';
import RightBar from '@/Shared/Presentacion/right-bar.component.vue';


const showRightBar = ref(false);
const name = ref("");

const ToggleShowRightBar = () => {
  showRightBar.value = !showRightBar.value;
};
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
