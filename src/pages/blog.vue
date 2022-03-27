<script setup>
const people = Object.values(import.meta.globEager("../articles/*.md")).map(
  (item) => item.default
);

console.log("people", people, import.meta.globEager("../articles/*.md"));
</script>

<template>
  <h1 style="color: white">MY BLOG</h1>
</template>
