import { render, fireEvent, screen } from '@testing-library/react';
import { SearchForm } from './component';

describe('SearchForm component', () => {
  it('should render an input with the value equal to initial value passed in props',
      () => {
        const initialQuery = 'test';
        render(<SearchForm initialQuery={initialQuery} onSearch={() => {}}/>);
        const input = screen.getByRole('textbox');
        expect(input).toHaveValue(initialQuery);
      });

  it('should call the "onChange" prop with proper value after typing to the input and a "click" event on the Submit button',
      () => {
        const initialQuery = 'test';
        const onChangeMock = jest.fn();
        render(<SearchForm initialQuery={initialQuery}
                           onSearch={onChangeMock}/>);
        const input = screen.getByRole('textbox');
        const submitButton = screen.getByText('Search');
        const newValue = 'new test';
        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.click(submitButton);
        expect(onChangeMock).toHaveBeenCalledWith(newValue);
      });

  it('should call the "onChange" prop with proper value after typing to the input and pressing Enter key',
      () => {
        const initialQuery = 'test';
        const onChangeMock = jest.fn();
        render(<SearchForm initialQuery={initialQuery}
                           onSearch={onChangeMock}/>);
        const input = screen.getByRole('textbox');
        const newValue = 'new test';
        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
        expect(onChangeMock).toHaveBeenCalledWith(newValue);
      });
});
