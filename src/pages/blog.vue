<script setup>
const people = Object.values(import.meta.globEager("../articles/*.md")).map(
  ({ description, name, imageUrl }) => ({
    name,
    description,
    imageUrl,
  })
);

console.log("people", people, import.meta.globEager("../articles/*.md"));
</script>

<template>
  <h1 style="color: white">MY BLOG</h1>

  <li v-for="person in people" :key="person.name">
    <img :src="person.imageUrl" />
    <h3>{{ person.name }}</h3>
  </li>
</template>
