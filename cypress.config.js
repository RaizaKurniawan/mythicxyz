const path = require('path');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mythic-account-stag.agatedev.net/Account/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    edgeWebSecurity: false,
    electronWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' , 'electron' , 'edge') {
          // run code for Electron browser in 4.0.0
          return launchOptions
        }
      })
    },
  },
});


// module.exports = (on, config) => {
//   on('before:browser:launch', (browser = {}, args) => {
//     console.log(config, browser, args);
//     if (browser.name === 'chrome') {
//       args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
//     }
//     return args;
//   });
// };