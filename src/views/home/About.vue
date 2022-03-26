<script setup></script>

<template>
  <section class="section section--sm about">
    <h2 class="title">About me</h2>
    <p>
      I'm a Front-end developer based in Sofia, Bulgaria 🇧🇬 . Currently I'm
      working at
      <a
        href="https://blubito.de/jobs/en/"
        target="__blank"
        title="Blubito's website"
      >
        Blubito
      </a>
      with Vue as my main framework. I have had some experience with Angular,
      afterwards I worked couple of years with React (integrated with Sharepoint
      Online), but now I have transitioned completely to the green side.
    </p>
    <p>
      I have worked on couple different projects and applications like: Video
      Platform <span class="accent">[ Vue ]</span>, Backoffice App
      <span class="accent">[ Vue ]</span>, Extending UI Component Library
      <span class="accent">[ Vue ]</span>, Client Websites
      <span class="accent">[ Vue + Nuxt ]</span>, E-Commerce Shop
      <span class="accent">[ Vue + Nuxt ]</span>, RunScrum - Agile
      Application-Suite <span class="accent">[ React ]</span>, Website for music
      events <span class="accent">[ React + Gatsby ]</span>, Online-Exams App
      <span class="accent">[ React ]</span>, TimeSheet App
      <span class="accent">[ React ]</span>, Automated Warranty App
      <span class="accent">[ Angular ]</span>, couple more WordPress stuff and
      probably others I'm forgetting or are too small.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  .title {
    color: var(--clr-primary-2);
    font-size: var(--font-size-fluid-3);
    line-height: 1;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  p {
    color: var(--lime-2);
    font-size: 1.25rem;
    line-height: 1.5;
    letter-spacing: 1px;

    .accent {
      color: var(--clr-primary-3);
    }
  }
}
</style>
