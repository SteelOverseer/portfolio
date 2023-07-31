<template>
    <v-card class="magic-card token" :class="type">
        <v-card-title class="title">
          <div>
            {{ name }}
          </div>
        </v-card-title>
        <div id="token-picture" class="mx-auto">
          <v-img :src="imagePath"/>
        </div>
        <v-card-subtitle class="subtitle">Token Legendary Creature - Cat</v-card-subtitle>
        <div class="power-toughness">2 / 1</div>
    </v-card>
</template>

<script setup>
defineProps({
  name: String,
  imagePath: String,
  type: String
})
</script>

<style lang="scss" scoped>

  .token{
    width: 325px;
    height: 450px;
  }
  .magic-card {
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 10px solid black !important;
    border-bottom: 20px solid black !important;
    border-radius: 10px !important;
    align-items: center;
  }

  .rocky{
    background-color: #f5f2f2;
  }

  .chichi{
    background-color: #303030;
  }
    
  .title, .subtitle {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border: 2px solid black;
    max-height: 35px;
    margin: 5px;
    border-radius: 5px;
    width: 98%;
  }
  .subtitle {
    color: black !important;
    opacity: 1;
    height: 35px;
  }

  #token-picture {
    border: 2px solid black;
    width: 98%;
    height: 300px;
    background-color: black;
  }

  .power-toughness {
    display: flex;
    justify-content: center;
    border: 2px solid black;
    width: 50px;
    border-radius: 0px !important;
    margin-left: 251px;
    margin-bottom: 2px;
  }
</style>