<template>
  <div id='workHistory'>
    <v-card elevation='2'>
      <v-card-title>IDI Billing Solutions</v-card-title>
      <v-card-subtitle>Software Engineer (April 2021 - present)</v-card-subtitle>
      <v-card-text>
        <p>
          <ul>
            <li>Design, develope and deploy custom solutions for customers.</li>
            <li>Interface with external APIs as a part of custom solutions for customer workflows.</li>
            <li>Create or update documentation as needed.</li>
            <li>Participate in agile ceremonies such as stand up, planning and retro meetings.</li>
            <li>Test new functionality developed by other members of the team.</li>
            <li>Mentor newer developers hired to the team.</li>
            <li>Investigate cases that have come through support and open tickets as needed.</li>
            <li>Help define processes and guidelines for the team.</li>
          </ul>
        </p>
      </v-card-text>
    </v-card>
    <v-card elevation='2'>
      <v-card-title>dunnhumby</v-card-title>
      <v-card-subtitle>Software Engineer (September 2018 - April 2021)</v-card-subtitle>
      <v-card-text>
        <p>
          <ul>
            <li>Implemented the first proof of concept of using Vue.js and unit tests in the application.</li>
            <li>Rewrote the application’s Adobe InDesign plug-in to enhance security.</li>
            <li>Troubleshot and fixed bugs, working with Quality Assurance and Customer Support to make sure the intended functionality is captured.</li>
            <li>Developed new features based on given requirements, working with the Product Manager to clarify and update requirements as needed.</li>
            <li>Practice Agile with two-week sprints as part of an international team.</li>
            <li>Practice SAFe methodology with six-week increments as part of an international team.</li>
          </ul>
        </p>
      </v-card-text>
    </v-card>
    <v-card elevation='2'>
      <v-card-title>dunnhumby</v-card-title>
      <v-card-subtitle>Technical Consultant (June 2017 - September 2018)</v-card-subtitle>
      <v-card-text>
        <p>
          <ul>
            <li>Validated client data based on technical requirements and provided feedback to the client.</li>
            <li>Participated in meetings with clients to discuss data and data processes.</li>
            <li>Troubleshot data related issues found in implementing the data in the application.</li>
            <li>Collaborated with other teams to keep the Technical Requirements Document up to date.</li>
          </ul>
        </p>
      </v-card-text>
    </v-card>
    <v-card elevation='2'>
      <v-card-title>Aptaris</v-card-title>
      <v-card-subtitle>Business and Quality Analyst (April 2016 - June 2017)</v-card-subtitle>
      <v-card-text>
        <p>
          <ul>
            <li>Regression tested releases before the quarterly release and report any issues to the development team. </li>
            <li>Developed automated testing using Nightwatch.js and Selenium webdriver.</li>
            <li>Wrote test plans for new features based on given requirements.</li>
            <li>Wrote requirements for new features based on given business needs.</li>
            <li>Investigated bug reports and created tickets for the development team.</li>
            <li>Tested new features and bug fixes, reporting any issues to the development team.</li>
          </ul>
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  components: {  },
  name: 'WorkHistory',
}
</script>

<style lang="scss" scoped>
  #workHistory {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .v-card {
    max-width: 500px;
    margin: 10px;
  }
</style>