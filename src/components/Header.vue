<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link class="clean" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="clean" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="clean"
            :to="{ name: $route.name, hash: '#contacts-title' }"
            >Contacts</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: var(--clr-page);
  width: 100%;
  padding: 0.5rem 2rem;
  z-index: 100;

  .nav-list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    .nav-item {
      font-size: 1.25rem;
      a {
        text-decoration: none;
        color: var(--clr-primary);
        transition: color 300ms ease-in-out;
        &:hover {
          color: var(--clr-primary-3);
        }
      }
    }
  }
}

@media screen and (min-width: 640px) {
  .header .nav-list {
    justify-content: end;
  }
}

@media screen and (min-width: 1600px) {
  .header {
    background-color: transparent;
  }
}
</style>
