/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  beforeEach(() => {
    // run before each test case, like beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  it('Check different button actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');

    // find element with class attribute and create a list then select the 3. element from the list
    cy.get('.btn.btn-primary').then(($buttons) => {
      cy.wrap($buttons).eq(2).click();
      // assert the text
      cy.contains('Clicked on button three!').should('be.visible');

      // get all buttons with tagName

      cy.get('button').each((element, index, list) => {
        // assert length of the list; each method is creating me a loop
        expect(list).to.have.length(6);
        expect(element).to.have.attr('onclick');
      });

      // I will get all buttons then check each of them and click on button 4

      cy.get('button').each((element) => {
        if (element.text() == 'Button 4') {
          cy.log(element.text());

          element.click(); // you can not use Cypress methods on JQuery element

          // you need to wrap it
          cy.wrap(element).click();
          cy.contains('Clicked on button four!').should('be.visible');
        }
      });

      // npx cypress run --headless -b chrome
    });
  });
});
