const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },

//     "baseUrl": "https://sterlingpro-qa.sterlingapps.p.azurewebsites.net/",
//     "defaultCommandTimeout": 8000,
//     "pageLoadTimeout": 100000,
//     "viewportHeight": 800,
//     "viewportWidth": 1500

//   },
// });

 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the 'task' event
      on('task', {
        // Define your task handlers here
        logMessage(message) {
          console.log(message);
          return null; // Return null or a value if needed
        },
      });
    },

    baseUrl: 'https://sterlingpro-qa.sterlingapps.p.azurewebsites.net/',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 200000,
    viewportHeight: 800,
    viewportWidth: 1500,
  },
});