<script setup>
import {onMounted, ref} from 'vue';
import {ArticleService} from "../Application/article-api.service.js";
import router from "@/router.js";
import {useRoute} from "vue-router";

const articleService = new ArticleService();
const title = ref("");
const name = ref("");
const isEditing = ref(false);

const routes = useRoute();
const id = ref(routes.params.id || '')

defineProps({
  existingArticle: {
    type: Object,
    default: () => ({title: "", name: ""})
  }
});

const saveArticle = async () => {
  const article = {
    title: title.value,
    name: name.value
  };

  try {
    if (id.value !== '') {
      const {status} = await articleService.updateArticle(id.value, article);
      if (status === 200) {
        alert("Article udpated successfully.");
        router.push("/article");
      }
    } else {

      const {status} = await articleService.createArticle(article);
      if (status === 201) {
        alert("Article created successfully.");
        router.push("/article");
      }
    }
  } catch (error) {
    console.error("Error creating article:", error);
  }
};

onMounted(async () => {
  if (id.value !== 0) {
    const response = await articleService.getById(id.value);
    title.value = response.data.title;
    name.value = response.data.name;
  }
})

</script>

<template>
  <label for="title">Title</label>
  <pv-input-text v-model="title"></pv-input-text>

  <label for="title">Content</label>
  <pv-input-text v-model="name"></pv-input-text>

  <pv-button label="Save" @click="saveArticle"></pv-button>
</template>

<style scoped></style>
