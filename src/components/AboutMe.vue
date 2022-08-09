<template>
  <div id='aboutMe'>
    <h1>Hi, I'm Doug</h1>
    <p>
      I am a software engineer based out of Rochester NY.
      <br>
      I have a passion for writing effective and maintable code.
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