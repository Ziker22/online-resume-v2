describe('Take index page screenshots', () => {
  it('passes', () => {
    cy.visit('http://localhost:4321/');
    cy.stopAndResetAllVideosToBeginning();
    cy.argosScreenshot('homepage', {
      viewports: ['ipad-2', 'iphone-se2', 'macbook-13'],
    });
  });
});
