<template>
  <v-app-bar
      app
      color="white"
    >
      <v-app-bar-title id='title'>Douglas Schultz</v-app-bar-title>

      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to='About'>About</v-tab>
          <v-tab to='WorkHistory'>Work History</v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <div id='links'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=douglasschultz1@gmail.com" target='_blank'>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                id='email'
                large
                color="red darken-3"
                v-bind="attrs"
                v-on="on"
              >
                mdi-email-outline
              </v-icon>
            </template>
            <span>
              E-mail
            </span>
          </v-tooltip>
        </a>
        <a href="https://www.linkedin.com/in/douglas-schultz-7a9819a7/" target='_blank'>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                id='email'
                large
                color="blue darken-3"
                v-bind="attrs"
                v-on="on"
              >
                mdi-linkedin
              </v-icon>
            </template>
            <span>
              LinkedIn
            </span>
          </v-tooltip>
        </a>
        <a href='https://github.com/SteelOverseer/portfolio' target='_blank'>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                id='email'
                large
                color="black darken-3"
                v-bind="attrs"
                v-on="on"
              >
                mdi-github
              </v-icon>
            </template>
            <span>
              Github
            </span>
          </v-tooltip>
        </a>
      </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TitleBar',
}
</script>

<style lang="scss" scoped>
  #links {
    a {
      color: white
    }
  }
</style>