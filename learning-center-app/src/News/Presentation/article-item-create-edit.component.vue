<script setup>
import {ref} from 'vue'
import {NewsApiService} from "@/News/Application/news-api.service.js"
import router from "@/router.js";


const newsApiService = new NewsApiService();
const title = ref("")
const content = ref("")

const SaveArticle = async () => {
  var article ={
    title: title.value,
    content: content.value
  }
   var response =  await newsApiService.createArticle(article);

    if ( response.status === 201 ) {
      alert("article created successfully.")
      router.push("/article")
    }

}

</script>

<template>


  <label for="title">Title</label>
  <pv-input-text v-model="title"></pv-input-text>

  <label for="title">Content</label>
  <pv-input-text v-model="content"></pv-input-text>

  <pv-button label="Save" @click="SaveArticle"></pv-button>
</template>

<style scoped>

</style>