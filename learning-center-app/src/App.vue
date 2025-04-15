<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MyComponet from "@/components/MyComponet.vue";
import Header from "@/components/icons/header.vue";
</script>

<template>
  <Header />
  <Header />
  <Header />
  <Header />
  <Header />
  <Header />
  <Header />
    <MyComponet />
  <Footer></Footer>/

</template>

<style scoped>
header {
  line-height: 1.5;
  background: red;
}

nav{
  background: blue;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
