<template>
  <div id='aboutMe'>
    <h1>Hi, I'm Doug</h1>
    <p>
      I am a software engineer with a passion for writing effective and maintable code based out of Rochester NY.
    </p>
    <div id='links'>
      <div class="link">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=douglasschultz1@gmail.com" target='_blank'>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              ><font-awesome-icon icon="far fa-envelope" size="2xl" :style="{ color: 'red'}" /></span>
            </template>
            
            <span>
              E-mail
            </span>
          </v-tooltip>
        </a>
      </div>
      <div class="link">
        <a href="https://www.linkedin.com/in/douglas-schultz-7a9819a7/" target='_blank'>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              ><font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" :style="{ color: 'navy'}" /></span>
            </template>
            
            <span>
              LinkedIn
            </span>
          </v-tooltip>
        </a>
      </div>
      <div class="link">
        <a href='https://github.com/SteelOverseer' target='_blank'>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              ><font-awesome-icon icon="fa-brands fa-github" size="2xl" :style="{ color: 'black'}" /></span>
            </template>
            <span>
              Github
            </span>
          </v-tooltip>
        </a>
      </div>
      <div class="link">
        <a href="/files/DouglasSchultz_Resume.pdf" download>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              ><font-awesome-icon icon="fa-solid fa-file-arrow-down" size="2xl" :style="{ color: 'red'}" /></span>
            </template>
            <span>
              Resume
            </span>
          </v-tooltip>
        </a>
      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    components: {  },
    name: 'AboutMe',
    computed: {
      
    }
  }
</script>

<style lang="scss" scoped>
  #aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    #links {
      display: flex;
      flex-direction: row;
      margin: 10px;

      .link {
        display: flex;
        background-color: white;
        min-width: 50px;
        min-height: 50px;
        justify-content: center;
        align-items: center;
        margin: 10px;
        border-radius: 25px;
      }  
    }
  }

  p {
    position: relative;
    text-align: center;
    margin: 10px;
  }

 
</style>