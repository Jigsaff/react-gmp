import { render, fireEvent } from '@testing-library/react';
import { SortControl } from './component';

test('renders the component with the correct options and current selection',
    () => {
      const { getByLabelText } = render(<SortControl
          currentSelection="releaseDate"/>);
      const selectElement = getByLabelText('Sort by');

      expect(selectElement).toBeInTheDocument();
      expect(selectElement).toHaveValue('releaseDate');
      expect(selectElement.options).toHaveLength(2);
      expect(selectElement.options[0]).toHaveTextContent('Release Date');
      expect(selectElement.options[1]).toHaveTextContent('Title');
    });

test(
    'calls the onSelectionChange function when the select element value changes',
    () => {
      const handleSelectionChange = jest.fn();
      const { getByLabelText } = render(<SortControl currentSelection="title"
                                                     onSelectionChange={handleSelectionChange}/>);
      const selectElement = getByLabelText('Sort by');

      fireEvent.change(selectElement, { target: { value: 'releaseDate' } });

      expect(handleSelectionChange).toHaveBeenCalledWith('releaseDate');
    });
