import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './component';

describe('Counter component', () => {
  it('should render initial value provided in props', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue}/>);
    expect(screen.getByText(initialValue)).toBeInTheDocument();
  });

  it('should decrement the displayed value when the "decrement" button is clicked',
      () => {
        render(<Counter initialValue={0}/>);
        const decrementButton = screen.getByText('-');
        const valueDisplay = screen.getByText('0');
        fireEvent.click(decrementButton);
        expect(valueDisplay.textContent).toBe('-1');
      });

  it('should increment the displayed value when the "increment" button is clicked',
      () => {
        render(<Counter initialValue={0}/>);
        const incrementButton = screen.getByText('+');
        const valueDisplay = screen.getByText('0');
        fireEvent.click(incrementButton);
        expect(valueDisplay.textContent).toBe('1');
      });
});
