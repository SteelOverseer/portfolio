<template>
  <div id='projects'>
    <h1>Some projects I have worked on:</h1>
    <v-card elevation='2'>
      <v-card-title>MTG Price Checker</v-card-title>
      <v-card-subtitle>
        Written with: <font-awesome-icon icon="fa-brands fa-python" size="xl" :style="{ color: 'navy'}" />
      </v-card-subtitle>
      <v-card-text>
        <p>
          The idea for this project was to have a service to text in order to check the price of a magic card.
          This was written using python and uses twilio for messaging.
        </p>
      </v-card-text>
    </v-card>
    <v-card elevation='2'>
      <v-card-title>MTG Missing Card Finder</v-card-title>
      <v-card-subtitle>
        Written with: <font-awesome-icon icon="fa-brands fa-rust" size="xl" :style="{ color: 'orange'}" />
      </v-card-subtitle>
      <v-card-text>
        <p>
          This was a project to learn rust. It is meant to read decklists and create a list and count of cards used in decks and then compare the result to a collection file.
          This would tell me what cards are used in decks that are not tracked in the collection.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  components: {  },
  name: 'Projects',
}
</script>

<style lang="scss" scoped>
  #projects {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .v-card {
    max-width: 500px;
    margin: 10px;
  }

  h1 {
    color: white;
    margin-bottom: 10px;
  }
</style>