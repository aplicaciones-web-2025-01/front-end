<template>
  <div class="default-layout">
    <AppHeader/>
    <div class="content-wrapper">
      <Sidebar v-if="showSidebar"/>
      <main class="main-content">
        <RouterView />
      </main>
    </div>
    <AppFooter/>
    <button class="toggle-button" @click="toggleSidebar">
      {{ showSidebar ? $t("sidebar.hide") : $t("sidebar.show") }}
    </button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import AppHeader from "@/shared/presentation/the-header.component.vue";
import AppFooter from "@/shared/presentation/the-footer.component.vue";
import Sidebar from "@/shared/presentation/the-sidebar.component.vue";
import ArticleView from "@/News/Presentation/article-view.page.vue";
import HomeView from "@/Shared/Presentation/home-view.page.vue"

const showSidebar = ref(true);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 1rem;
}

.toggle-button {
  margin: 1rem;
  padding: 0.5rem;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
