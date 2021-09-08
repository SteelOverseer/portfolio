<template>
  <div id='workHistory'>
    <div>
      <h1>IDI Billing Solutions (April 2021 - present)</h1>
      <h2>Software Engineer</h2>
      <p>
        <ul>
          <li>Created proof of concept for re-writing existing projects in dotnet core.</li>
          <li>Built a custom application for a client utilizing Apple APIs</li>
        </ul>

      </p>
    </div>
    <div>
      <h1>dunnhumby (September 2018 - April 2021)</h1>
      <h2>Software Engineer</h2>
      <ul>
        <li>Implemented first proof of concept of using Vue.js and unit tests in the application.</li>
        <li>Rewrote the application’s Adobe InDesign plug-in to enhance security.</li>
        <li>Troubleshoot and fixed bugs, working with Quality Assurance and Customer Support to make sure the intended functionality is captured.</li>
        <li>Develop new features based on given requirements, working with the Product Manager to clarify and update requirements as needed.</li>
        <li>Practice Agile with two-week sprints as part of an international team.</li>
        <li>Practice SAFe methodology with six-week increments as part of an international team.</li>
      </ul>
    </div>
    <div>
      <h1>dunnhumby (June 2017 - September 2018)</h1>
      <h2>Technical Consultant</h2>
      <ul>
        <li>Validate client data based on technical requirements and provide feedback to the client.</li>
        <li>Participate in meetings with clients to discuss data and data processes.</li>
        <li>Troubleshoot data related issues found in implementing the data in the application.</li>
        <li>Collaborate with other teams to keep the Technical Requirements Document up to date.</li>
      </ul>
    </div>
    <div>
      <h1>Aptaris (April 2016 - June 2017)</h1>
      <h2>Business and Quality Analyst</h2>
      <ul>
        <li>Regression test releases before the quarterly release and report any issues to the development team. </li>
        <li>Developed automated testing using Nightwatch.js and Selenium webdriver.</li>
        <li>Write test plans for new features based on given requirements.</li>
        <li>Write requirements for new features based on given business need.</li>
        <li>Investigated bug reports and send confirmation to the development team.</li>
        <li>Test new features and bug fixes, reporting any issues to the development team.</li>
      </ul>
    </div>
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
</style>