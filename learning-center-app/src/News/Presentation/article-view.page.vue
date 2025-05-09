<template>
  <div>
    <h2>Article Management</h2>
    <pv-button label="New Article" @click="openNew"></pv-button>
    <pv-data-table :value="articles" paginator rows="10">
      <pv-column field="title" header="Title"></pv-column>
      <pv-column field="Name" header="Name"></pv-column>
      <pv-column header="Actions">
        <template #body="slotProps">
          <pv-button icon="pi pi-pencil" @click="editArticle(slotProps.data)"></pv-button>
          <pv-button icon="pi pi-trash" severity="danger" @click="deleteArticle(slotProps.data)"></pv-button>
        </template>
      </pv-column>
    </pv-data-table>
  </div>
</template>

<script setup>
import {onBeforeMount, reactive, ref} from 'vue';
import {ArticleAssembler} from "@/News/Application/article.assembler.js";
import {ArticleService} from "@/News/Application/article-api.service.js";
import router from "@/router.js";

const articles = ref([]);
const article = reactive({});
const articleService = new ArticleService();

onBeforeMount(async () => {
  articles.value = ArticleAssembler.toEntitiesFromResponse(await articleService.getAll());

});
const openNew = () => {
  router.push("/article/create")
};

const editArticle = (selected) => {
  console.log(selected);
  router.push({name: "updateArticle", params: {id: selected.id}});
};


const deleteArticle = (selected) => {
};
</script>


<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
