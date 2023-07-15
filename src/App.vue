<template>
  <v-app>
    <v-main id='portfolioBody'>
      <v-container class='fill-height'>
        <v-row no-gutters class='fill-height'>
          <v-col ></v-col>
          <v-col id="main-display-column" cols='18' sm='8'>
            <card-front/>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardFront from './components/CardFront.vue'

export default {
  name: 'App',

  components: {
    CardFront
  },
};
</script>

<style lang="scss">
  .v-app-bar-title__content {
    width: 200px;
  }

  #portfolioBody {
    background-color:#674736;
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  #main-display-column {
    display: flex;
    justify-content: center;
  }
</style>