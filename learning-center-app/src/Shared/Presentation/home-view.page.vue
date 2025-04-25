<template>
  <div class="home-view">
    <AppHeader/>
    <div class="content-wrapper">
      <Sidebar/>
      <main class="main-content">
        <form>
          <div >
            <label  for="Name" >Name of Product :</label>
            <input id="Name"  v-model="name" type="text" minlength="20" >

            <label >{{ name }}</label>
          </div>
        </form>
        <div class="flex flex-column lg:flex-row align-items-center lg:justify-content-end justify-content-start">
          <div class=" w-4rem h-4rem bg-primary font-bold p-4 border-round mr-3">1</div>
          <div
              class="  w-4rem h-4rem bg-primary font-bold flex align-items-center justify-content-center p-4 border-round mr-3">
            2
          </div>
          <div
              class="  w-4rem h-4rem bg-primary font-bold flex align-items-center justify-content-center p-4 border-round">
            3
          </div>
        </div>
        <!-- <img src="../../assets/catanddog.jpg" alt="cat with dog" > -->
        <TaskList/>
        <RightBar v-if="showRightBar"/>
      </main>
    </div>
    <pv-button label="submit"/>
    <button @click="ToggleShowRightBar">
      {{ showRightBar ? 'Hide RightBar' : 'Show RightBar' }}
    </button>
    <pv-paginator rows="10" rowsPerPageOptions="[10, 20, 30]" totalRecords="120"></pv-paginator>
    <AppFooter/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import AppHeader from '@/Shared/Presentation/the-header.component.vue';
import AppFooter from '@/Shared/Presentation/the-footer.component.vue';
import Sidebar from '@/Shared/Presentation/the-sidebar.component.vue';
import TaskList from '@/Shared/Presentation/task-list.component.vue';
import RightBar from '@/Shared/Presentation/right-bar.component.vue';


const showRightBar = ref(false);
const name = ref("");

const ToggleShowRightBar = () => {
  showRightBar.value = !showRightBar.value;
};
</script>

<style scoped>
#input {
  visibility: hidden;
}

.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
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
