<script setup>
useHead({
  title: "404 | icantevencode",
  meta: [
    {
      name: `description`,
      content: `Not Found`,
    },
  ],
});
</script>

<template>
  <section class="not-found section">
    <div>
      <h1 class="title-1">404. Damn. Not Found.</h1>
      <p class="subTitle">Please don't tell me it's a bug again ...</p>
    </div>

    <div>
      <img
        src="https://media0.giphy.com/media/4MjVrfDD2WrN6/giphy.gif?cid=790b7611c98eda8c8e6c1148e2c6314bef8bd50f2fe4a364&rid=giphy.gif&ct=g"
        width="480"
      />
      <p>
        <a href="https://giphy.com/gifs/4MjVrfDD2WrN6" target="__blank"
          >via GIPHY</a
        >
      </p>
    </div>

    <p class="text">
      Probably you should go to
      <router-link to="/">Home page</router-link>
    </p>
  </section>
</template>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .title-1 {
    text-align: center;
  }
  .subTitle {
    margin-left: auto;
    display: block;
    font-size: var(--font-size-fluid-0);
    text-align: right;
    color: var(--clr-primary-3);
    margin-bottom: 3rem;
    font-style: italic;
  }
}
</style>
