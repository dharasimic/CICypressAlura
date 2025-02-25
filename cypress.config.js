const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "email": "catarina@email.com",
    "senha": "Senha123",
    "apiLogin": "http://localhost:8080/auth/login",
    "apiClinica": "http://localhost:8080/clinica",
    "apiEspecialista": "http://localhost:8080/especialista",
    "requestMode": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    
    defaultCommandTimeout: 60000
  },
});