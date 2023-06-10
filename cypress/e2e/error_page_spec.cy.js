describe("error page", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://www.themealdb.com/api/json/v1/1/random.php", {
      fixture: '/meal.json'
    })
    cy.visit("http://localhost:3000")

  })
  it('should disply what the user sees if they enter the wrong url path', () => {
    cy.visit("http://localhost:3000/whatever")
    cy.get('.header-container').should('be.visible') 
    cy.get('.logo-container img').should('be.visible') 
    cy.get('.logo-container img').should('have.attr', 'src', '/static/media/logo1.bccbaf698f076c4a2281.png') 
    cy.get('.slogan').should('be.visible') 
    cy.get('.slogan').should('contain','Unlock Your Inner Chef: Unleash creativity with our Meal Generator') 
    cy.get('.error-message').contains('The URL path /error you used was incorrect. Please try again.')

    })

  })