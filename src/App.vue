<template>
  <v-app>
    <title-bar />
    <v-main id='portfolioBody'>
      <v-container class='fill-height'>
        <v-row no-gutters class='fill-height'>
          <v-col></v-col>
          <v-col cols='18' sm='8'>
            <router-view></router-view>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
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
    width: 200px;
  }

  #portfolioBody {
    background-color: navy;
  }

  .container {
    display: flex;
    flex-direction: row;
  }
</style>