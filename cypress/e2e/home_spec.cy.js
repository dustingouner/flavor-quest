
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
    cy.get('.slogan').should('be.visible') 
    cy.get('.slogan').should(
      'contain','Unlock Your Inner Chef: Unleash creativity with our Meal Generator') 
    cy.get('.logo-container img').should('have.attr', 'src', '/static/media/logo1.bccbaf698f076c4a2281.png') 
  })

  it('should display question with two buttons', () => {
    cy.get('.random-meal-button').should('be.visible').contains('Random Meal');
    cy.get('.random-meal-button').click();
    cy.url().should('include', '/randomMeal');

    // need to check that take-out button exist. May need to refactor a tag on home page.
  })

  
   

})


