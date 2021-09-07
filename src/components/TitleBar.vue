<template>
  <div id='title'>
    <div v-tooltip.bottom-center="test">test</div>
    <div id='actions'>
      <h1>About</h1>
      <h1>Work History</h1>
      <h1>Technologies</h1>
    </div>
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
      <a href='https://github.com/SteelOverseer' target='_blank'>
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
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="scss" scoped>
  #title {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid blue;

    h1 {
      color: black;
    }

    #actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      // flex-grow: 1;
    }

    #links {
      a {
        height: 100%;
        width: 100%;
      }

      #email {
        margin-right: 10px;
      }

      #linkedin {
        margin-right: 10px;
        color: blue;
      }
      
      #github {
        color: black;
      }
    }
  }
</style>