/// <reference types="cypress" />

describe('Context: My First Tests',()=>{
    before( () =>{
        //runs once before all test cases in this describe block, like beforeClass in TestNG
    })
    beforeEach(()=>{
        //run before each test case, like beforeMethod in TestNG
        cy.clearCookies();
    })
    after(()=>{
        //similar to afterClass in TestNG
    })
    afterEach(()=>{
        //similar to afterMethod in TestNG
    })

    it('Opening a web application',()=>{
        cy.visit('/registration_form');
        //cy.get('.list-group > :nth-child(1) > a').click();
       


    })




})