<template>
  <v-container id='portfolio-body' class='fill-height'>
    <v-row no-gutters class='fill-height'>
      <v-col cols='12' sm='4'>
        <CatToken v-show="rockySummoned" name="Rocky, Chaos Incarnate" imagePath="/files/Rocky.png" type="rocky" />
        <CatToken v-show="chiChiSummoned" name="Chi Chi, Void Princess" imagePath="/files/ChiChi.png" type="chichi" />
      </v-col>
      <v-col id="main-display-column" cols='12' sm='4'>
        <MyCard @summonChiChi="(val) => chiChiSummoned = val" @summonRocky="(val) => rockySummoned = val" />
      </v-col>
      <v-col cols='12' sm='4'>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MyCard from './components/MyCard.vue'
import CatToken from './components/CatToken.vue'

let chiChiSummoned = ref(false);
let rockySummoned = ref(false);
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
  }

  #main-display-column {
    display: flex;
    justify-content: center;
  }
</style>
