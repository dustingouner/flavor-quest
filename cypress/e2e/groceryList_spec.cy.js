describe("Grocery List", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://www.themealdb.com/api/json/v1/1/random.php", {
      fixture: '/meal.json'
    })
    cy.visit("http://localhost:3000")
  })
  it('should display a grocery list containing an ingredients and measurements when user clicks on shopping list button.', () => {
    cy.get('.random-meal-button').click();
    cy.url().should('include', '/randomMeal');
    cy.get('[href="/shoppingList/52947"] > button').click()
    cy.url().should('include', '/shoppingList/52947')
    cy.get('.shopping-list-container').should('be.visible')
    cy.get('.title').should('have.text', 'Ingredients List');
    cy.get('.list').should('have.length.gt', 0);
    cy.get(':nth-child(1) > label').contains('Tofu - 450g')
    cy.get('.list input[type="checkbox"]').first().check().should('be.checked');
    cy.get(':nth-child(17) > label').contains('Cornstarch - 1 tbs')
    cy.get('.list input[type="checkbox"]').last().check().should('be.checked');
  })
  it('User should be able to click on logo in header to bring them back to the home page', () => {
    cy.get('.logo').click()
    cy.url().should('include', '/')
  })
})