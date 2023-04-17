<template>
  <title>JiangsPage</title>
  <header class="header scroll-header">
    <AppNav></AppNav>
  </header>
  <main class="main">
    <AppHome></AppHome>
    <AppAbout></AppAbout>
    <AppQualification></AppQualification>
    <AppSkills></AppSkills>
    <AppPaper></AppPaper>
    <AppPortfolio></AppPortfolio>
    <AppContact></AppContact>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppHome from './components/AppHome.vue';
import AppAbout from './components/AppAbout.vue';
import AppSkills from './components/AppSkills.vue';
import AppQualification from './components/AppQualification.vue';
import AppPaper from './components/AppPaper.vue';
import AppPortfolio from './components/AppPortfolio.vue';
import AppContact from './components/AppContact.vue';
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppNav,
    AppHome,
    AppAbout,
    AppSkills,
    AppQualification,
    AppPortfolio,
    AppPaper,
    AppContact,
    AppFooter
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>
