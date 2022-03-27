<script setup>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import TechStack from "./components/TechStack.vue";
import Contacts from "./components/Contacts.vue";
import { onMounted, ref } from "vue";

useHead({
  title: "Home | icantevencode",
  meta: [
    {
      name: `description`,
      content: `Simeon Petrov's website & blog - icantevencode`,
    },
  ],
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const createObserver = (selector, callBack) => {
  const queryEl = document.querySelector(selector);

  const observerCallBack = (entries, observer) => {
    const { isIntersecting } = entries[0];
    console.log("isIntersecting", isIntersecting);
    if (isIntersecting) {
      observer.disconnect();
      callBack();
    }
  };

  const observer = new IntersectionObserver(observerCallBack, observerOptions);

  observer.observe(queryEl);
};

const isVisibleAbout = ref(false);
const isVisibleStack = ref(false);
const isVisibleContacts = ref(false);

onMounted(() => {
  createObserver("#section-about", () => {
    isVisibleAbout.value = true;
  });
  createObserver("#section-stack", () => {
    isVisibleStack.value = true;
  });
  createObserver("#section-contacts", () => {
    isVisibleContacts.value = true;
  });
});
</script>

<template>
  <Hero />
  <About :isVisible="isVisibleAbout" />
  <TechStack :isVisible="isVisibleStack" />
  <Contacts :isVisible="isVisibleContacts" />
</template>
