<script setup>
import {defineProps} from "vue";
import ArticleItem from "./article-item.component.vue";

defineProps({
  articles: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="article-view">
    <h1>{{ $t("articles.title") }}</h1>
    <div class="article-list">
      <article-item
          v-for="article in articles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
</template>

<style scoped>
.article-view {
  padding: 1rem;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
