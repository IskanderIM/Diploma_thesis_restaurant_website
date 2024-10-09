<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>-->

  <RouterView /> 
  <!-- <NavigationBlock />
  <home-view /> -->
  <!-- <HomeView /> -->

</template>

<style lang="scss">
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Rufina:wght@400;700&display=swap');

h2 {
  /* Heading 1 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 108px;
  line-height: 120px;
  color: #000000;
}
.heading-one {
  /* Heading 1 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 108px;
  line-height: 120px;
  color: #000000;
}
h3 {
}
.heading-two {
}
h4 {
  /* Heading 3 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 57px;
  line-height: 54px;
  color: #000000;
}
.heading-three {
  /* Heading 3 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 57px;
  line-height: 54px;
  color: #000000;
}
h5 {
  /* Heading 4 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  text-align: center;
  color: #000000;
}
.heading-four {
  /* Heading 4 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  text-align: center;
  color: #000000;
}
h6 {
  /* Heading 5 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  /* FFFFFF */
  color: #FFFFFF;
}
.heading-five {
  /* Heading 5 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  /* FFFFFF */
  color: #FFFFFF;
}
.heading-six {}
/* Header */
.header__title {
  /* Hero Heading */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 120px;
  /* or 94% */

  /* FFFFFF */
  color: #FFFFFF;
}
.header__subtitle {
  /* Body */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */
  letter-spacing: 0.02em;
  /* FFFFFF */
  color: #FFFFFF;
}
.body-text {
  /* Body */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */
  letter-spacing: 0.02em;
}


</style>
