import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ItemSearch } from '@components/ItemSearch';
import { RecoilRoot } from 'recoil';
import { itemSearchMockData } from '../common/helpers/search.helper.test';
import * as searchApi from '@common/api/search.api';
import { CommonStatus } from '@components/CommonStatus';

const fetchRecord = jest.fn();

describe('Item Search', () => {
  const id = 'lccn';
  const event = {
    target: {
      value: 'test',
    },
  };

  beforeEach(() =>
    render(
      <RecoilRoot>
        <CommonStatus />
        <ItemSearch fetchRecord={fetchRecord} />
      </RecoilRoot>,
    ),
  );

  test('renders Item Search component', () => {
    expect(screen.getByTestId('id-search')).toBeInTheDocument();
  });

  test('triggers search control', async () => {
    const ctl = screen.getByTestId(id);

    fireEvent.click(ctl);
    await waitFor(() => {
      expect(ctl).toBeChecked();
    });
  });

  test('searches the selected identifier for query', async () => {
    const getByIdentifierMock = jest.spyOn(searchApi, 'getByIdentifier');

    const ctl = screen.getByTestId(id);

    fireEvent.click(ctl);
    fireEvent.change(screen.getByTestId('id-search-input'), event);
    fireEvent.click(screen.getByTestId('id-search-button'));

    await waitFor(() => {
      expect(getByIdentifierMock).toHaveBeenCalledWith(id, event.target.value);
    });
  });

  test('returns message if the response is empty', async () => {
    const getByIdentifierMock = jest.spyOn(searchApi, 'getByIdentifier');
    getByIdentifierMock.mockReturnValueOnce(Promise.resolve({ ...itemSearchMockData, content: [] }));

    fireEvent.change(screen.getByTestId('id-search-input'), event);
    fireEvent.click(screen.getByTestId('id-search-button'));

    await waitFor(() => {
      expect(screen.getByText('No resource descriptions match your query')).toBeInTheDocument();
    });
  });

  test('displays error notification if API call throws', async () => {
    const getByIdentifierMock = jest.spyOn(searchApi, 'getByIdentifier');
    getByIdentifierMock.mockReturnValueOnce(Promise.reject(new Error()));

    fireEvent.change(screen.getByTestId('id-search-input'), event);
    fireEvent.click(screen.getByTestId('id-search-button'));

    await waitFor(() => {
      expect(screen.getByText('Error fetching data')).toBeInTheDocument();
    });
  });

  test('calls fetchRecord on action item edit button click', async () => {
    const getByIdentifierMock = jest.spyOn(searchApi, 'getByIdentifier');
    getByIdentifierMock.mockReturnValueOnce(Promise.resolve(itemSearchMockData));

    fireEvent.change(screen.getByTestId('id-search-input'), event);
    fireEvent.click(screen.getByTestId('id-search-button'));

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('edit-button'));

      expect(fetchRecord).toHaveBeenCalled();
    });
  });

  test('calls fetchRecord on row click', async () => {
    const getByIdentifierMock = jest.spyOn(searchApi, 'getByIdentifier');
    getByIdentifierMock.mockReturnValueOnce(Promise.resolve(itemSearchMockData));

    fireEvent.change(screen.getByTestId('id-search-input'), event);
    fireEvent.click(screen.getByTestId('id-search-button'));

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('table-row'));

      expect(fetchRecord).toHaveBeenCalled();
    });
  });

  test('returns out of fetchData if no query present', async () => {
    const getByIdentifierMock = jest.spyOn(searchApi, 'getByIdentifier');
    fireEvent.click(screen.getByTestId('id-search-button'));

    await waitFor(() => {
      expect(getByIdentifierMock).not.toHaveBeenCalled();
    });
  });
});
