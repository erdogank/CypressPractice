/// <reference types="cypress" />

describe('Cypress file upload tests', () => {
   
    beforeEach(() => {

        /**
         * ın order to upload files in Cypress we need to install plugin
         * we will run this command:
         * npm install -dev cypress-file-upload
         * 
         * then we need to import necessary command to our project
         * in our support folder we have commands.js file:
         * this file is a good place for putting our utility methods(functions)
         * add following line:
         * import 'cypress-file-upload';
         * 
         * 
         */

      // run before each test case, like beforeMethod in TestNG
      cy.clearCookies();
    });
    
  
    it('Opening a web application', () => {
      cy.visit('/registration_form');
      // cy.get('.list-group > :nth-child(1) > a').click();
    });
    
  });

