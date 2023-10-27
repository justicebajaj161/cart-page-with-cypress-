// cypress/integration/app.spec.js

describe('Cart App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    
  });

  it('should have a navbar', () => {
    cy.get('nav').should('exist');
  });


  it('should display "CartPage" in the navbar', () => {
    cy.get('nav').should('contain.text', 'CartPage');
  });
    
  it('should keep the navbar at the top of the page when scrolling', () => {
    cy.get('nav').should('have.css', 'position', 'sticky');
  });

  
  it('should display cart count as 4 initially , make sure in refresh there are 4 different products visible and each product should be in 1 amount', () => {
    cy.get('.cart-total').should('contain.text', '4');
  });

  it('should have a cart container', () => {
    cy.get('.cart').should('exist');
  });
    
it('should display cart items', () => {
  cy.get('.cart-item').should('be.visible');
});

it('should display image for cart items', () => {
  cy.get('.cart-item img').should('be.visible');
});

it('should increase the cart item count when clicking increase button', () => {
  cy.get('.amount-btn').first().click().parent().contains('2');
  
});

it('should decrease the cart item count when clicking decrease button', () => {
  cy.get('.amount-btn').last().click();
  cy.get('.amount').should('contain.text', '1');
});

it('should have a remove button for cart items', () => {
  cy.get('.remove-btn').should('be.visible');
});



it('should have a clear cart button', () => {
  cy.get('.clear-btn').should('be.visible');
});

it('should clear the cart when clicking clear cart button', () => {
  cy.get('.clear-btn').click();
  cy.get('.cart-item').should('not.exist');
});

it('should display the total price correctly', () => {
  cy.get('.cart-total span').should('be.visible');
});

it('each cart item should display a title and price', () => {
  cy.get('.cart-item').each(($el) => {
    cy.wrap($el).find('h4').should('be.visible');       // title
    cy.wrap($el).find('.item-price').should('be.visible');  // price
  });
});

it('clicking remove button should remove the item', () => {
  cy.get('.cart-item').should('have.length', 4);
  cy.get('.remove-btn').first().click();
  cy.get('.cart-item').should('have.length', 3);
});

it('loading indicator should be shown when fetching products', () => {
  // Assuming you have some loading class or element when fetching data
  cy.get('.loading').should('be.visible'); 
});
it('loading indicator should not be visible after products are loaded', () => {
  cy.get('.loading').should('not.exist');
});

it('should display "Your cart is empty" message when the cart is empty', () => {
  cy.get('.clear-btn').click();
  cy.contains(/your cart is empty/i)
});






it('should correctly toggle the cart item count', () => {
  cy.reload();
  cy.get('.amount-btn').first().click();
 
  cy.get('.amount').first().should('contain.text', '2');
  
  cy.get('.amount-btn').first().click();
  cy.get('.amount').first().should('contain.text', '3');
});

it('should remove the product when its count is decreased to zero', () => {
  cy.get('.cart-item').should('have.length', 4);
  cy.get('.amount-btn').last().click(); 
  cy.get('.cart-item').should('have.length', 3);
});





it('each cart item should display all its details correctly', () => {
  cy.get('.cart-item').each(($el) => {
          // title
    cy.wrap($el).find('img').should('exist');         // image
    cy.wrap($el).find('.item-price').should('exist'); // price
    cy.wrap($el).find('.amount').should('exist');     // amount
  });
 
    
});

// it('should display an error message if data fetch fails', () => {
//   cy.intercept('GET', '/api/products', {statusCode: 500, body: {}});
//   cy.get('.error-message').should('be.visible');
// });
it('should retain cart data after a page refresh', () => {
  cy.get('.cart-total').should('contain.text', '4');
  cy.reload();
  cy.get('.cart-total').should('contain.text', '4');
});



})
