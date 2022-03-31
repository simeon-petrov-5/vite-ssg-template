<script setup>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import TechStack from "./components/TechStack.vue";
import Contacts from "./components/Contacts.vue";

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
  <Contacts />
</template>
