import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './index';

describe('Dialog', () => {
  it('should open and close the dialog when button is clicked', () => {
    const { getByText, queryByText } = render(<Dialog title="Test Dialog"
                                                      onClose={() => {}}/>);

    // Confirm that the dialog is not visible on the page initially
    expect(queryByText('Test Dialog')).not.toBeInTheDocument();

    // Click the button to open the dialog
    fireEvent.click(getByText('Open Portal'));

    // Confirm that the dialog is visible on the page
    expect(getByText('Test Dialog')).toBeInTheDocument();

    // Click the close button to close the dialog
    fireEvent.click(getByText('X'));

    // Confirm that the dialog is not visible on the page again
    expect(queryByText('Test Dialog')).not.toBeInTheDocument();
  });
});
