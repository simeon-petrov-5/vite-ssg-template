<script setup>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import TechStack from "./components/TechStack.vue";

useHead({
  title: "Home | icantevencode",
  meta: [
    {
      name: `description`,
      content: `Simeon Petrov's website & blog - icantevencode`,
    },
  ],
});
</script>

<template>
  <Hero />
  <About />
  <TechStack />
</template>
