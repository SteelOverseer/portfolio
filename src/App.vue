<template>
  <v-app>
    <title-bar />
    <v-main>
      <router-view></router-view>
    </v-main>
      <v-footer>
        <p>
          Favicon made by <a href="" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon" target='_blank'>www.flaticon.com</a>
        </p>
      </v-footer>
  </v-app>
</template>

<script>
import TitleBar from './components/TitleBar.vue'

export default {
  name: 'App',

  components: {
    TitleBar,
  },
};
</script>

<style lang="scss">
  .v-app-bar-title__content {
    width: 200px !important;
  }
</style>