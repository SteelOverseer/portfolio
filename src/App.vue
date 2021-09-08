<template>
  <v-app>
    <title-bar />
    <v-main>
      <router-view></router-view>
      <div>Favicon made by <a href="" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </v-main>
  </v-app>
</template>

<script>
// import HomePage from './components/HomePage';
import TitleBar from './components/TitleBar.vue'

export default {
  name: 'App',

  components: {
    TitleBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  .v-app-bar-title__content {
    width: 200px !important;
  }  
</style>