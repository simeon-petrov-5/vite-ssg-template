<script setup>
const articleGlobs = import.meta.globEager("./*.md");
let articles = Object.keys(articleGlobs).map((key) => {
  return {
    to: key.replace("./", "/blog/").replace(".md", "").toLocaleLowerCase(),
    title: articleGlobs[key].title,
    date: articleGlobs[key].date,
    thumbnail: articleGlobs[key].thumbnail,
    excerpt: articleGlobs[key].excerpt,
  };
});
</script>

<template>
  <section class="section section--sm">
    <h1 class="title-1">Sometimes I try to write stuff</h1>

    <ul class="agrid">
      <li v-for="article in articles" :key="article.title" class="md:acol-6">
        <article class="post">
          <router-link class="clean" :to="article.to">
            <img :src="article.thumbnail" />
          </router-link>
          <router-link :to="article.to">
            <h3>{{ article.title }}</h3>
          </router-link>
          <p>{{ article.excerpt }} ...</p>
        </article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.title-1 {
  margin-bottom: 3rem;
  text-align: center;
}
.post {
  * + * {
    margin-top: 1rem;
  }
  img {
    border-radius: 0.5rem;
  }
  p {
    color: var(--clr-label);
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
}
</style>
