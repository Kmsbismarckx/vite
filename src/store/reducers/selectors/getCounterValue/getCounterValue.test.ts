import { describe, it } from 'vitest';
import { getCounterValue } from '@/store/reducers/selectors/getCounterValue/getCounterValue.ts';

describe('getCounterValue', () => {
  it('empty state', () => {
    expect(getCounterValue({})).toBe(0);
  });
  it('filled state', () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
