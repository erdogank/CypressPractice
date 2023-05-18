/// <reference types="cypress" />

describe('Cypress file upload tests', () => {
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
   * the file you wanna upload should be under your fixture folder
   *
   *
   */

  beforeEach('Navigate to upload page', () => {
    // run before each test case, like beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/upload');
  });

  it('Check upload action', () => {
    // choose file to upload
    cy.get('input#file-upload').attachFile('gitcommands.txt');
    // upload file
    cy.get('#file-submit').click();
    // Assert
    cy.get('#uploaded-files').then(() => {
      cy.contains('gitcommands.txt').should('be.visible');
    });
  });
});
