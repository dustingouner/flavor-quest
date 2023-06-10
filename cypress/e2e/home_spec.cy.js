
describe("Home page view", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://www.themealdb.com/api/json/v1/1/random.php", {
      fixture: '/meal.json'
    })
    cy.visit("http://localhost:3000")
  })
  
  it('should display the header on page load', () => {
    cy.get('.header-container').should('be.visible') 
    cy.get('.logo-container img').should('be.visible') 
    cy.get('.logo-container img').should('have.attr', 'src', '/static/media/logo1.bccbaf698f076c4a2281.png') 
    cy.get('.slogan').should('be.visible') 
    cy.get('.slogan').should('contain','Unlock Your Inner Chef: Unleash creativity with our Meal Generator') 
  })

  it('User should see a button labeled Random Meal and takeout. Should bring user to a new page displaying random meal details', () => {
    cy.get('.homePage-question').contains('Are you ready to test your cooking skills?')
    cy.get('a.takeout-button').should('have.attr', 'href', 'https://www.yelp.com')
    cy.get('.random-meal-button').should('be.visible').contains('Random Meal');
    cy.get('.random-meal-button').click();
    cy.url().should('include', '/randomMeal')
    cy.go('back');
  })


  // Try to go back and fix error with testing my take out button link. Cypress suggested using uncaught:exception but did not work. See comments below. 

  it.skip('User should see a button labeled Take Out. Should bring user to yelp website when clicked', () => {
    cy.get('a.takeout-button').click();

    // Assert that the user is now on Yelp.com
    cy.url().should('eq', 'https://www.yelp.com/');

    // Go back to the original page
    cy.go('back');

    // Assert that the user is back on the original page
    cy.url().should('eq', '/');
      
  
    })
  })


  // cy.get('a.takeout-button').click();
  //   cy.origin('https://www.yelp.com', () => {
  //      cy.on('uncaught:exception', (e) => {
  //      if (e.message.includes('Things went bad')) {
  //       we expected this error, so let's ignore it
  //       and let the test continue
  //       return false
  //     }
  //   })
  // })
  //     cy.visit('https://www.yelp.com/')
  //     cy.url().should('eq', 'https://www.yelp.com/');









