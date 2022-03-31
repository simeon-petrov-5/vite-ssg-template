<script setup>
import AOS from "aos";

onMounted(() => {
  AOS.init({
    duration: 1000,
    offset: 200,
    once: true,
  });
});
</script>

<template>
  <router-view />
</template>
