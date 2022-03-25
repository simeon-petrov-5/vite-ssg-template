<script setup>
const codePerson = `.person{ 
  firstName: "Simeon", 
  lastName: "Petrov" 
}`;

const codeAbout = `.about{
    profesion: "Developer", 
    whatIDo: "Nobody knows tbh", 
    hobby:"Styling buttons...?"
}`;
</script>

<template>
  <section class="hero">
    <div class="heroContent">
      <h1 class="title">Hello <span>I'm Simeon</span></h1>

      <div class="imgWrapper">
        <img
          class="img"
          src="../../assets/img/15708352.jpg"
          alt="Simeon photo"
        />
      </div>

      <div class="codes">
        <code class="code">{{ codePerson }}</code>
        <code class="code">{{ codeAbout }}</code>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  overflow: hidden;

  .heroContent {
    width: 100%;
    max-width: 480px;
  }
  .title {
    font-size: 4.5rem;
    line-height: 1.2;
    color: var(--clr-primary);
    margin-bottom: 3rem;
  }
  .img {
    width: 100%;
    max-width: 400px;
    border-radius: 1rem;
    margin: 0 auto 3rem;
  }
  .title span {
    display: block;
    color: var(--clr-primary-gamma);
    text-align: center;
    font-size: 3rem;
    font-family: "Open Sans";
    font-weight: 300;
    line-height: 1;
  }

  .code {
    width: 100%;
    max-width: 360px;
    display: block;
    padding: 1rem;
    font-size: 15px;
    white-space: pre;
    color: var(--clr-primary-gamma);
    background-color: var(--clr-primary-dark-300);
    background-image: linear-gradient(
      to right bottom,
      #2f4858,
      #2b4251,
      #283d4b,
      #243744,
      #21323e
    );
    border: 1px solid var(--clr-primary-gamma);
    border-radius: 0.5rem;
    overflow: hidden;

    &:first-child {
      margin-bottom: 2rem;
    }

    &:last-child {
      margin-left: auto;
    }
  }
}

@media screen and (min-width: 768px) {
  .hero {
    .heroContent {
      max-width: 960px;
      display: grid;
      gap: 1rem;
      grid-template-columns: 45% 1fr;
      grid-template-rows: 160px auto;
      grid-template-areas:
        "img title"
        "img code";
      align-content: center;
    }
    .imgWrapper {
      grid-area: img;
      aspect-ratio: 2 / 3;
      .img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      grid-area: title;
      margin-bottom: 0;
    }
    .codes {
      grid-area: code;
    }
  }
}

@media screen and (min-width: 1080px) {
  .hero .heroContent {
    grid-template-columns: 380px 1fr;
    max-width: 900px;
  }
}
</style>
