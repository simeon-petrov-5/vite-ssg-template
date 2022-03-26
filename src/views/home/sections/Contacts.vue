<script setup>
defineProps({
  isVisible: Boolean,
});
</script>

<template>
  <section class="section section--sm contacts">
    <h2 class="title-1">Contacts</h2>
    <p class="text">
      Find me on
      <a href="https://www.linkedin.com/in/simeonpetrov5/" target="__blank"
        >LinkedIn</a
      >
    </p>

    <form action="" class="form">
      <div class="name">
        <input id="name" type="text" />
        <label for="name">Your Name</label>
      </div>

      <div class="email">
        <input id="email" type="email" />
        <label for="email">Your Email</label>
      </div>

      <div class="name">
        <textarea id="message" rows="10"></textarea>
        <label for="message">Your Message</label>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  position: relative;
  .title-1,
  .text {
    text-align: right;
  }

  .form {
    --input-container-pt: 17px;
    --input-py: 0.5rem;

    max-width: 720px;
    margin-inline: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--input-container-pt);
    row-gap: calc(var(--input-container-pt) / 3);

    div {
      position: relative;
      padding-top: var(--input-container-pt);

      label {
        position: absolute;
        top: calc(var(--input-container-pt) + var(--input-py));
        left: 1rem;
        color: var(--clr-label);
        background-color: var(--clr-page);
        transition: all 300ms ease-in;
      }

      input,
      textarea {
        width: 100%;
        background-color: transparent;
        border: 2px solid var(--clr-primary-3);
        padding: var(--input-py) 1rem;
        color: var(--clr-text);
        border-radius: 0.325rem;
        outline: none;

        &:focus + label {
          top: 0px;
          padding-inline: 0.5rem;
          left: 0.5rem;
        }
      }
    }
  }
}
</style>
