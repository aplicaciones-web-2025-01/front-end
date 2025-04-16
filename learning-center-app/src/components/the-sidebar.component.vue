<template>
  <aside class="sidebar" aria-label="Main Navigation">
    <nav>
      <ul>
        <li><a href="#books" aria-label="Books Section">Books</a></li>
        <li><a href="#authors" aria-label="Authors Section">Authors</a></li>
        <li><a href="#genres" aria-label="Genres Section">Genres</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #ececec;
  padding: 1rem;
  border-right: 1px solid #ddd;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar li {
  margin: 0.5rem 0;
}
.sidebar a {
  text-decoration: none;
  color: #2196f3;
}
</style>
