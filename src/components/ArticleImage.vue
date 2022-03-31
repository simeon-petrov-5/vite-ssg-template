<script setup>
defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <div class="article-img">
    <img :src="src" :alt="alt" />
    <p>Photo on <a :href="src" target="_blank">Unsplash</a></p>
  </div>
</template>

<style lang="scss" scoped>
.article-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 1.5rem;

  img {
    margin-bottom: 0.75rem;
    max-width: 600px;
  }
  p {
    color: var(--clr-label);
    font-style: italic;
  }
}
</style>
