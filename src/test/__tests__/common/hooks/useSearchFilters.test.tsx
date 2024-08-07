import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useSearchFilters } from '@common/hooks/useSearchFilters';
import { ChangeEvent, ReactNode } from 'react';
import state from '@state';

describe('useSearchFilters', () => {
  const singlelimitersMock = {
    limiter_1: 'value_1',
    limiter_2: 'value_2',
  } as unknown as Limiters;

  const getWrapper =
    (initialLookupData: Limiters = {} as Limiters) =>
    ({ children }: { children: ReactNode }) => (
      <RecoilRoot initializeState={snapshot => snapshot.set(state.search.limiters, initialLookupData)}>
        {children}
      </RecoilRoot>
    );

  test('onChangeLimiters - should update single limiter', () => {
    const testResult = {
      limiter_1: 'newValue',
      limiter_2: 'value_2',
    };
    const eventMock = {
      target: {
        id: 'newValue',
        name: 'limiter_1',
      },
    } as ChangeEvent<HTMLInputElement>;

    const { result } = renderHook(useSearchFilters, { wrapper: getWrapper(singlelimitersMock) });
    act(() => result.current?.onChangeLimiters(eventMock));

    expect(result.current.limiters).toEqual(testResult);
  });

  test('onChangeLimitersMulti - should update multiple limiters', () => {
    const limitersMock = {
      limiter_1: 'value_1',
      limiter_2: ['value_2'],
    } as unknown as Limiters;
    const testResult = {
      limiter_1: 'value_1',
      limiter_2: ['value_2', 'newValue'],
    };

    const eventMock = {
      target: {
        id: 'newValue',
        name: 'limiter_2',
      },
    } as ChangeEvent<HTMLInputElement>;

    const { result } = renderHook(useSearchFilters, { wrapper: getWrapper(limitersMock) });
    act(() => result.current.onChangeLimitersMulti(eventMock));

    expect(result.current.limiters).toEqual(testResult);
  });

  test('onChange - should not update limiters', () => {
    const eventMock = {
      target: {
        id: 'newValue',
        name: 'limiter_1',
      },
    } as ChangeEvent<HTMLInputElement>;

    const { result } = renderHook(useSearchFilters, { wrapper: getWrapper(singlelimitersMock) });
    act(() => result.current.onChange(eventMock));

    expect(result.current.limiters).toEqual(singlelimitersMock);
  });

  test('returns limiters and onChange functions', () => {
    const { result } = renderHook(useSearchFilters, { wrapper: getWrapper(singlelimitersMock) });

    expect(result.current.limiters).toBe(singlelimitersMock);
    expect(result.current.onChangeLimiters).toBeInstanceOf(Function);
    expect(result.current.onChangeLimitersMulti).toBeInstanceOf(Function);
    expect(result.current.onChange).toBeInstanceOf(Function);
  });
});
