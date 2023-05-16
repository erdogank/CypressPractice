describe('Find or Get Elements by using different locators', () => {
  beforeEach(() => {
    // run before each test case, like beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/login');
  });

  it('Check different locator strategies', () => {
    // by css locator
    cy.get("input[name='username']").type('CydeoStudent'); // every statement creates an object to
    // be interacted and next comment makes an operation to the object created at the previous statement

    // attribute name and value
    cy.get("input[type='text']").clear();

    // tagName
    cy.get('input').each((item, index, list) => {
      // assert the lenght of list 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });
    // by attribute

    cy.get('[type]');

    // by className
    cy.get('.btn.btn-primary');

    // by id
    cy.get('#wooden_spoon');

    // if we want to use text: no xpath in cypress, but still possible with a different approach

    cy.get('button').should('contain', 'Login').click();

    // npx cypress run --spec .\cypress\e2e\locators.cy.js
  });
  xit('Check finding elements by travelling throug DOM', () => {
    // travel to find the login button: locate username box-go to parent form -then find button

    cy.get('input[name="username"]')
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });
  it.only('Check different type of assertions', () => {
    // Cypress itself bundles assertions provided by Chai, Sinon and Jquery libraries
    // Should Assertion : does the assertion directly on the object itself
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    // expect assertion: creates a subject of out test, then you implement different actions
    cy.get('#wooden_spoon').then((buttonelement) => {
      expect(buttonelement).to.have.text('Login');
      expect(buttonelement).to.have.class('btn btn-primary');
    });
  });
});
