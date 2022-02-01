<script setup>
const information = [
  {
    title: "Vue",
    desc: "My primary JS framework for the last 2y+. I use it everyday for clients SPAs, websites and side-projects",
    icon: ["fab", "vuejs"],
    stuff: ["Vite", "Composition", "Pinia/Vuex"],
  },
  {
    title: "SSR & SSG",
    desc: "I'm working on websites, that need a little bit of additional edge regarding loading & SEO.",
    icon: ["fas", "server"],
    stuff: ["Nuxt", "Gatsby", "Vite SSR"],
  },
  {
    title: "JS",
    desc: "I use it to do stuff. Nothing more, nothing less.",
    icon: ["fab", "js-square"],
    stuff: ["VanillaJS", "TypeScript", "ESM"],
  },
  {
    title: "Styling",
    desc: "I try keeping as much as possible up-to-date with the 'modern' styling. Btw - CSS Vars are a god send.",
    icon: ["fab", "css3-alt"],
    stuff: ["CSS Vars", "Grid", "Flex", "Responsive"],
  },
  {
    title: "CSS Frameworks",
    desc: "I kinda use a lot of stuff (willingly or not)",
    icon: ["fas", "file-code"],
    stuff: ["SASS (Dart)", "WindiCSS", "CSS", "Tailwind", "PostCSS", "modules"],
  },
  {
    title: "CMS",
    desc: "When using CMS I typically use GraphQL for consuming the data",
    icon: ["fab", "wordpress"],
    stuff: ["Strapi", "NetlifyCMS", "Wordpress"],
  },
];
</script>

<template>
  <section class="knowledge">
    <div>
      <h2 class="title">words i know | guess | use</h2>
      <span class="subTitle">You get the drill</span>
    </div>

    <ul class="cardList">
      <li v-for="info in information" :key="info.title">
        <article class="article">
          <h3 class="title">{{ info.title }}</h3>
          <p class="desc">{{ info.desc }}</p>
          <h4 class="subTitle">Stuff used</h4>
          <ul class="stuff">
            <li class="stuf" v-for="stuf in info.stuff" :key="stuf">
              <span>{{ stuf }}</span>
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.knowledge {
  display: flex;
  flex-direction: column;
  align-items: center;

  div .title {
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: linear-gradient(
      to right bottom,
      #689c80,
      #77aa82,
      #89b783,
      #9fc483,
      #b7d082
    );
    font-size: 4rem;
    line-height: 1;
    text-transform: capitalize;
  }
  div .subTitle {
    margin-left: auto;
    display: block;
    font-size: 1rem;
    text-align: right;
    color: var(--color-primary) !important;
    margin-bottom: 3rem;
    font-style: italic;
  }
  .cardList {
    display: inline-grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    justify-content: start;
    gap: 1rem;

    & > li:nth-child(2n + 1) {
      padding: 1rem 0;
    }
  }
}

.article {
//   height: 100%;
  max-width: 300px;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  color: var(--color-black);
  background-color: var(--color-primary);

  & > .title {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .desc {
    padding: 0;
    margin-bottom: 0.5rem;
  }
  & > .subTitle {
    margin: 0 auto 0.5rem;
    font-size: 14px;
    text-transform: capitalize;
  }

  .stuff {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.5rem;
    .stuf {
      border-radius: 0.38rem;
      padding: 0.125rem 0.5rem;
      background-color: var(--color-primary-beta);
      background-image: linear-gradient(
        to right bottom,
        #89b783,
        #93be83,
        #9fc483,
        #aaca82,
        #b7d082
      );
    }
  }
}
</style>
