import { render, screen, fireEvent } from '@testing-library/react';
import { ComplexLookupField } from '@components/ComplexLookupField';

describe('Complex Lookup Field', () => {
  const onChange = jest.fn();
  const uuid = 'test-uuid';

  const { getByTestId } = screen;

  function renderComponent() {
    render(<ComplexLookupField uuid={uuid} onChange={onChange} />);
  }

  test('triggers onChange', () => {
    const event = {
      target: {
        value: 'testValue',
      },
    };

    renderComponent();
    fireEvent.change(getByTestId('complex-lookup-input'), event);

    expect(onChange).toHaveBeenCalledWith(uuid, [
      { label: event.target.value, meta: { uri: '__MOCK_URI_CHANGE_WHEN_IMPLEMENTING' } },
    ]);
  });
});
