<template>
  <div id='aboutMe'>
    <h1>Hi, my name is Doug</h1>
    <p>I am a full stack software engineer with {{ yearsExperience }} of experience</p>
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
  }
</style>