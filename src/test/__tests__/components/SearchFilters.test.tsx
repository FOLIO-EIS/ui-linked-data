import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { SearchFilters } from '@components/SearchFilters';

const setSearchParams = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [{}, setSearchParams],
}));

describe('SearchFilters', () => {
  beforeEach(() =>
    render(
      <RecoilRoot>
        <SearchFilters />
      </RecoilRoot>,
    ),
  );

  test('changes limiters', () => {
    const initRadio = screen.getByRole('radio', { name: 'marva.allTime' });

    expect(initRadio).toBeChecked();

    fireEvent.click(screen.getByRole('radio', { name: 'marva.past12Months' }));

    expect(initRadio).not.toBeChecked();
  });

  test('adds and removes to the selection of limiters with multiselection option', () => {
    const initCheckbox = screen.getByRole('checkbox', { name: 'marva.volume' });
    expect(initCheckbox).not.toBeChecked();

    fireEvent.click(initCheckbox);
    expect(initCheckbox).toBeChecked();

    fireEvent.click(initCheckbox);
    expect(initCheckbox).not.toBeChecked();
  });
});
