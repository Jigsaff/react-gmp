import { render, fireEvent } from '@testing-library/react';
import SearchContext from '../../pages/MovieListPage/SearchContext';
import { SearchForm } from './component';

describe('SearchForm', () => {
  const initialSearchQuery = 'Initial search query';
  const handleSearchQueryChange = jest.fn();

  it('renders the search form with initial value', () => {
    const { getByTestId } = render(
        <SearchContext.Provider
            value={{ searchQuery: '', handleSearchQueryChange }}>
          <SearchForm initialSearchQuery={initialSearchQuery}/>
        </SearchContext.Provider>,
    );
    const input = getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(initialSearchQuery);
  });

  it('calls handleSearchQueryChange when form is submitted', () => {
    const { getByTestId } = render(
        <SearchContext.Provider
            value={{ searchQuery: '', handleSearchQueryChange }}>
          <SearchForm initialSearchQuery={initialSearchQuery}/>
        </SearchContext.Provider>,
    );
    const input = getByTestId('search-input');
    const submitButton = getByTestId('search-submit-button');
    fireEvent.change(input, { target: { value: 'New search query' } });
    fireEvent.click(submitButton);
    expect(handleSearchQueryChange).toHaveBeenCalledWith('New search query');
  });
});
