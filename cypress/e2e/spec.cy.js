describe('GenreSelect', () => {
  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const selectedGenre = 'All';

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('allows the user to select a genre', () => {
    cy.get('[data-testid=genre-select]').as('genreSelect');
    cy.get('@genreSelect').find('button').should('have.length', genres.length);
    cy.get('@genreSelect')
        .contains('button', selectedGenre)
        .should('have.class', 'font-semibold');
    cy.get('@genreSelect').contains('button', 'Comedy').click();
    cy.get('@genreSelect')
        .contains('button', selectedGenre)
        .should('not.have.class', 'font-semibold');
    cy.get('@genreSelect')
        .contains('button', 'Comedy')
        .should('have.class', 'font-semibold');
  });

  it('updates the genre when a new selection is made', () => {
    cy.get('[data-testid=genre-select]').as('genreSelect');
    cy.get('@genreSelect').contains('button', 'Documentary').click();
    cy.get('@genreSelect')
        .contains('button', 'Documentary')
        .should('have.class', 'font-semibold');
    cy.get('@genreSelect')
        .contains('button', selectedGenre)
        .should('not.have.class', 'font-semibold');
    cy.get('@genreSelect')
        .contains('button', 'Comedy')
        .should('not.have.class', 'font-semibold');
  });
});
