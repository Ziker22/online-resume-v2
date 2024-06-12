/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    stopAndResetAllVideosToBeginning(): void;
  }
}

Cypress.Commands.add('stopAndResetAllVideosToBeginning', () => {
  cy.window().then((window) => {
    const maybeVideoTags = window.document.getElementsByTagName('video');
    if (maybeVideoTags.length > 0) {
      cy.get('video').then((video) => {
        for (let i = 0; i < video.length; i++) {
          video[i].pause();
          video[i].currentTime = 0;
        }
      });
    }
  });
});
