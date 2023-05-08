import { render, fireEvent } from '@testing-library/react';
import { Dialog } from './component';

describe('Dialog', () => {
  it('opens and closes portal when button is clicked', () => {
    const { getByRole, getByText, queryByText } = render(
        <Dialog title="Test Dialog">
          <p>Dialog content</p>
        </Dialog>,
    );

    expect(queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(getByRole('button', { name: 'Open Portal' }));
    expect(getByText('Dialog content')).toBeInTheDocument();
    fireEvent.click(getByRole('button', { name: 'X' }));
    expect(queryByText('Dialog content')).not.toBeInTheDocument();
  });
});
