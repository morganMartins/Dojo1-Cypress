const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    responseTimeout: 10000,
    requestTimeout: 10000,
  },
});
