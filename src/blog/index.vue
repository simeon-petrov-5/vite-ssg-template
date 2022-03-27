<route lang="yaml">
meta:
  layout: blog
</route>

<script setup>
const articleGlobs = import.meta.globEager("./*.md");
let articles = Object.keys(articleGlobs).map((key) => {
  return {
    to: key.replace("./", "/blog/").replace(".md", "").toLocaleLowerCase(),
    name: articleGlobs[key].name,
    description: articleGlobs[key].description,
    imageUrl: articleGlobs[key].imageUrl,
    published: articleGlobs[key].published,
  };
});

articles = articles.sort((a, b) => {
  return new Date(Date.parse(b.published)) - new Date(Date.parse(a.published));
});

console.log("people", articles);
</script>

<template>
  <h1 style="color: white">MY BLOG</h1>

  <li v-for="article in articles" :key="article.name">
    <router-link :to="article.to">
      <!-- <img :src="article.imageUrl" /> -->
      <h3>{{ article.name }}</h3>
    </router-link>
  </li>
</template>
