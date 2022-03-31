<template>
  <div class="blogpost section section--sm">
    <router-view />
  </div>
</template>

<style lang="scss">
.blogpost {
  color: white;

  h1 {
    color: var(--clr-primary);
    text-align: center;
  }
  .sub-title {
    color: var(--clr-label);
    text-align: center;
    font-style: italic;
    font-size: 1rem;
  }
  p {
    font-size: 1.25rem;
    letter-spacing: 1px;
    line-height: 1.5;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--clr-primary-2);
  }
  ul,
  ol {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }

  blockquote {
    background-color: transparent;
    border-left: 10px solid var(--clr-primary-3);
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
  }
  blockquote:before {
    color: var(--clr-primary-3);
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
}
</style>
