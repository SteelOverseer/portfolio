<template>
  <v-app>
    <v-main id='portfolioBody'>
      <v-container class='fill-height'>
        <v-row no-gutters class='fill-height'>
          <v-col></v-col>
          <v-col cols='18' sm='8'>
            <about-me/>
            <projects/>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-main>
      <v-footer dark>
        <p>
          Favicon made by <a href="" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon" target='_blank'>www.flaticon.com</a>
        </p>
      </v-footer>
  </v-app>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',

  components: {
    AboutMe,
    Projects
  },
};
</script>

<style lang="scss">
  .v-app-bar-title__content {
    width: 200px;
  }

  #portfolioBody {
    background-color:#121212;
  }

  .container {
    display: flex;
    flex-direction: row;
  }
</style>