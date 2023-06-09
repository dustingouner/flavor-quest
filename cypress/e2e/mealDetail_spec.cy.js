describe("Meal Detail view", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://www.themealdb.com/api/json/v1/1/random.php", {
      fixture: '/meal.json'
    })
    cy.visit("http://localhost:3000")
  })

  it('should display random meal to the user with an Image, cooking instructions, title, and video', () => {
    cy.get('.random-meal-button').click();
    cy.url().should('include', '/randomMeal');
    cy.get('.meal-name').should('contain.text', 'Ma Po Tofu | Chinese | Beef')
    cy.get('.meal-image').should('have.attr', 'src').should('include', 'https://www.themealdb.com/images/media/meals/1525874812.jpg') // Replace 'meal-image.jpg' with the expected image source
    cy.get('.meal-instructions').should('contain.text', 'Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.\r\nMix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.\r\nCut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.\r\nGet a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.\r\nFry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.\r\nAdd water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.\r\nStir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.\r\nTransfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.\r\nServe immediately with steamed rice.')

    cy.get('.meal-detail-buttons-container')
      .find('button')
      .should('contain.text', 'Shopping List')
    cy.get('.meal-detail-buttons-container')
      .find('button')
      .should('contain.text', 'New Meal')
    cy.get('#player iframe')
      .should('have.attr', 'title', 'Meal Video')
      .and('have.attr', 'src')
      .should('include', 'https://www.youtube.com/embed/IhwPQL9dFYc') 
  })

  // it('Should allow the user to click on new meal button in order to generate a new meal', () => {

  // })
  })

