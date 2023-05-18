import { render, fireEvent } from '@testing-library/react';
import GenreSelect from './component';

describe('GenreSelect', () => {
  const onSelect = jest.fn();

  afterEach(() => {
    onSelect.mockClear();
  });

  it('should render a button for each genre', () => {
    const { getAllByRole } = render(<GenreSelect/>);
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  it('should select a genre when a button is clicked', () => {
    const { getByText } = render(<GenreSelect onSelect={onSelect}/>);
    const actionButton = getByText('Action');
    fireEvent.click(actionButton);
    expect(onSelect).toHaveBeenCalledWith('Action');
  });

  it('should highlight the selected genre', () => {
    const { getByText } = render(<GenreSelect selectedGenre="Drama"/>);
    const dramaButton = getByText('Drama');
    expect(dramaButton).toHaveClass('font-semibold');
  });
});
