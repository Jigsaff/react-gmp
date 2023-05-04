import { render, fireEvent } from '@testing-library/react';
import Dialog from './index';

describe('Dialog', () => {
  it('should open and close the dialog when button is clicked', () => {
    const onCloseMock = jest.fn();

    const { getByText, queryByText } = render(
        <Dialog title="Test Dialog" onClose={onCloseMock}/>,
    );

    expect(queryByText('Test Dialog')).not.toBeInTheDocument();
    fireEvent.click(getByText('Open Portal'));
    expect(getByText('Test Dialog')).toBeInTheDocument();
    fireEvent.click(getByText('X'));
    expect(queryByText('Test Dialog')).not.toBeInTheDocument();
    expect(onCloseMock).toHaveBeenCalled();
  });
});

