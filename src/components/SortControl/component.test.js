import { render, fireEvent } from '@testing-library/react';
import { SortControl } from './component';

describe('SortControl component', () => {
  test('renders correctly', () => {
    const { getByLabelText, getByTestId } = render(
        <SortControl sortCriterion="releaseDate" onSortCriterion={() => {}}/>,
    );

    const label = getByLabelText('Sort by');
    expect(label).toBeInTheDocument();

    const select = getByTestId('sort-control');
    expect(select).toBeInTheDocument();
    expect(select.value).toBe('releaseDate');

    const options = select.getElementsByTagName('option');
    expect(options.length).toBe(2);
    expect(options[0].value).toBe('releaseDate');
    expect(options[0].textContent).toBe('Release Date');
    expect(options[1].value).toBe('title');
    expect(options[1].textContent).toBe('Title');
  });

  test('calls onSortCriterion when select value changes', () => {
    const onSortCriterionMock = jest.fn();
    const { getByTestId } = render(
        <SortControl sortCriterion="releaseDate"
                     onSortCriterion={onSortCriterionMock}/>,
    );

    const select = getByTestId('sort-control');
    fireEvent.change(select, { target: { value: 'title' } });

    expect(onSortCriterionMock).toHaveBeenCalledTimes(1);
    expect(onSortCriterionMock).toHaveBeenCalledWith('title');
  });
});
