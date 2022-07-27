<template>
  <div id='aboutMe'>
    <h1>Hi, my name is Doug</h1>
    <p>
      I am a full stack software engineer with {{ yearsExperience }} of experience in software development.
      <br>
      I am most experienced with Javascript and Vue and I also have some experience in .net framework and .net core.
    </p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  components: {  },
  name: 'AboutMe',
  computed: {
    yearsExperience() {
      return moment([2018, 9, 1]).toNow(true);
    } 
  }
}
</script>

<style scoped>
  #aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
  }

  p {
    position: relative;
    text-align: center;
    margin: 10px;
  }
</style>