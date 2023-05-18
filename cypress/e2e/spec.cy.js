describe('Movie List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it.only('Searches for movies', () => {
    cy.get('[data-testid=search-input]').type('Star Wars{enter}');
    cy.get('[data-testid=movie-tile]')
        .should('have.length', 9)
        .contains('Star Wars');
  });

  it('Should sort movies by release date', () => {
    cy.get('[data-testid=sort-control]').select('Release Date');
    cy.get('[data-testid=movie-tile]').first().contains('The Dark Knight');
    cy.get('[data-testid=movie-tile]').last().contains('Star Wars');
  });

  it('Sorts movies by release date and title', () => {
    cy.get('[data-testid=sort-control]')
        .select('Release Date')
        .should('have.value', 'releaseDate');

    cy.get('[data-testid=sort-control]')
        .select('Title')
        .should('have.value', 'title');
  });

  it('Switches between genres', () => {
    cy.contains('[data-testid=genre-select] button', 'Action')
        .click()
        .should('have.class', 'font-semibold');
    cy.contains('[data-testid=genre-select] button', 'Comedy')
        .click()
        .should('have.class', 'font-semibold');
  });

  it('should select a movie and return to search', () => {
    cy.get('[data-testid=movie-tile]').first().click();
    cy.get('[data-testid=movie-details]').contains('Fifty Shades Freed');
    cy.get('[data-testid=movie-tile]').first().click();
    cy.get('[data-testid=search-input]').should('have.value', '');
  });
});
