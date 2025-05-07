<script setup>
import ArticleItem from "./article-item.component.vue";
import {NewsApiService} from "@/News/Application/news-api.service.js"
import {ArticleAssembler} from "@/News/Application/article.assembler.js";
import {onBeforeMount, ref} from "vue";

const newsApiService = new NewsApiService();

const articles = ref([])

onBeforeMount(async () => {
  articles.value = ArticleAssembler.toEntitiesFromResponse(await newsApiService.getArticles());

});

</script>

<template>
  <router-link to="/article/create">Create Article</router-link>
  <div class="article-view">
    <h1 aria-description="This is the title">{{ $t("articles.title") }}</h1>
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
