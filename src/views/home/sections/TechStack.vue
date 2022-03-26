<script setup>
defineProps({
  isVisible: Boolean,
});

const colors = [
  "#ffa8a8",
  "#ff8787",
  "#ff6b6b",
  "#fa5252",
  "#e599f7",
  "#da77f2",
  "#cc5de8",
  "#b197fc",
  "#9775fa",
  "#845ef7",
  "#4dabf7",
  "#339af0",
  "#228be6",
  "#66d9e8",
  "#3bc9db",
  "#15aabf",
  "#63e6be",
  "#38d9a9",
  "#12b886",
  "#8ce99a",
  "#69db7c",
  "#40c057",
  "#a9e34b",
  "#94d82d",
  "#82c91e",
  "#ffe066",
  "#fcc419",
  "#fab005",
  "#ffc078",
  "#ffa94d",
  "#ff922b",
  "#fd7e14",
];
const mainStack = [
  "Vue",
  "Vite",
  "Vitest | Jest",
  "Pinia | Vuex",
  "Nuxt",
  "SSR | SSG",
  "JS",
  "TS",
  "Dart SASS",
  "WindiCSS | Tailwind",
  "CSS Vars",
  "Strapi",
];
const generalStack = [
  "React",
  "Gatsby",
  "CSS Modules",
  "Netlify",
  "WordPress",
  "jQuery",
];

const randomColor = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return `color: ${color}`;
};
</script>

<template>
  <section id="section-stack" class="section section--sm techstack">
    <div :class="{ 'fade-up': isVisible }">
      <h2 class="title-1">words i know / use / guess</h2>
      <span class="subTitle">You get the drill</span>
    </div>

    <ul v-if="isVisible" class="stack-list">
      <li class="stack--main">My main stack are stuff like</li>
      <li v-for="main in mainStack" :key="main" :style="randomColor()">
        {{ main }}
      </li>

      <li class="stack--general">But I also know some stuff about</li>
      <li v-for="general in generalStack" :key="general" :style="randomColor()">
        {{ general }}
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@keyframes fade-right {
  from {
    margin-left: -10px;
    opacity: 0;
  }
  to {
    margin-left: 0px;
    opacity: 1;
  }
}
.techstack {
  display: flex;
  flex-direction: column;
  align-items: center;

  div .subTitle {
    margin-left: auto;
    display: block;
    font-size: var(--font-size-fluid-0);
    text-align: right;
    color: var(--clr-primary-3);
    margin-bottom: 3rem;
    font-style: italic;
  }

  .stack-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 0.5rem;
    font-size: 1.25rem;
    .stack--main {
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-image: linear-gradient(
        to right,
        var(--lime-6),
        var(--orange-4)
      );
    }

    .stack--general {
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-image: linear-gradient(
        to right,
        var(--orange-4),
        var(--lime-6)
      );
    }

    & > li {
      opacity: 0;
      animation: fade-right 500ms forwards ease-in;
    }
    @for $i from 2 to 22 {
      & > li:nth-child(#{$i}) {
        animation-delay: (#{$i * 200ms});
      }
    }
  }
}
</style>
