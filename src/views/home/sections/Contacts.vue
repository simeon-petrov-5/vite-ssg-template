<script setup>
defineProps({
  isVisible: Boolean,
});

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const touched = reactive({
  name: false,
  email: false,
  message: false,
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const errorValidation = (field) => {
  let validEmail = false;
  if (field === "email") {
    validEmail = validateEmail(field);
  }
  return touched[field] && formData[field].length === 0 && !validEmail;
};

const nameError = computed(() => errorValidation("name"));
const emailError = computed(() => errorValidation("email"));
const messageError = computed(() => errorValidation("message"));

const onSubmit = (event) => {
  event.preventDefault();
  touched.name = true;
  touched.email = true;
  touched.message = true;

  if (!nameError.value && !emailError.value && !messageError.value) {
    event.form.submit();
  }
};
</script>

<template>
  <section id="section-contacts" class="section section--sm contacts">
    <h2 class="title-1" :class="{ 'fade-up': isVisible }">Contacts</h2>
    <p class="text" :class="{ 'fade-up': isVisible }">
      Find me on
      <a href="https://www.linkedin.com/in/simeonpetrov5/" target="__blank"
        >LinkedIn</a
      >
    </p>

    <form
      class="form agrid"
      :class="{ 'fade-up': isVisible }"
      name="ask-question"
      method="post"
      data-netlify="true"
      action="/submission-success"
    >
      <input type="hidden" name="form-name" value="ask-question" />

      <div class="name sm:acol-5">
        <input
          id="name"
          type="text"
          v-model="formData.name"
          name="name"
          :class="{ filled: formData.name, error: nameError }"
          @blur="touched.name = true"
        />
        <label for="name">Your Name</label>
        <transition>
          <span v-if="nameError" class="error">Tell me your name!</span>
        </transition>
      </div>

      <div class="email sm:acol-7">
        <input
          id="email"
          type="email"
          name="email"
          v-model="formData.email"
          :class="{ filled: formData.email, error: emailError }"
          @blur="touched.email = true"
        />
        <label for="email">Your Email</label>
        <transition>
          <span v-if="emailError" class="error">Give me a valid email!</span>
        </transition>
      </div>

      <div class="name acol-12">
        <textarea
          id="message"
          rows="10"
          :class="{ filled: formData.message, error: messageError }"
          v-model="formData.message"
          name="message"
          @blur="touched.message = true"
        ></textarea>
        <label for="message">Your Message</label>
        <transition>
          <span v-if="messageError" class="error">
            Hey, write me something!
          </span>
        </transition>
      </div>

      <button type="submit" class="btn sm:acol-4">Send</button>

      <div class="sm:acol-8">
        <div data-netlify-recaptcha="true"></div>
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
    opacity: 0;
  }

  .text {
    animation-delay: 300ms;
  }

  .form {
    --input-container-pt: 17px;
    --input-py: 0.5rem;

    opacity: 0;
    animation-delay: 600ms;

    max-width: 720px;
    margin-inline: auto;

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
        transition: border-color 300ms ease-in-out;

        &.error {
          border-color: var(--clr-danger);
        }

        &:focus + label,
        &.filled + label {
          top: 0px;
          padding-inline: 0.5rem;
          left: 0.5rem;
        }
      }

      .error {
        color: var(--clr-danger);
      }
    }

    .btn {
      margin-top: var(--input-container-pt);

      border: 2px solid var(--clr-primary-3);
      background-color: transparent;
      color: var(--clr-primary-3);
      border-radius: 0.325rem;
      padding: 0.5rem 0.25rem;
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

      &:hover {
        background-color: var(--clr-primary-3);
        color: var(--dark-9);
      }
    }
  }
}
</style>
