
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

  it('User should see a button labeled Random Meal. Should bring user to a new page displaying random meal details', () => {
    cy.get('.homePage-question').contains('Are you ready to try out your new meal?')
    cy.get('.random-meal-button').should('be.visible').contains('Random Meal');
    cy.get('.random-meal-button').click();
    cy.url().should('include', '/randomMeal');
  })

  it('User should see a button labeled Take Out. Should bring user to yelp website when clicked', () => {
    cy.get('a.takeout-button').should('be.visible');
//     cy.get('a.takeout-button').click();
//     cy.origin('https://www.yelp.com', () => {

//   cy.on('uncaught:exception', (e) => {

//     if (e.message.includes('Things went bad')) {

//       // we expected this error, so let's ignore it

//       // and let the test continue

//       return false

//     }

//   })

// })
//     cy.visit('https://www.yelp.com/')
//     cy.url().should('eq', 'https://www.yelp.com/');
  
    })
  })

   




