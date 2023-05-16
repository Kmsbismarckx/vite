import { describe, it } from 'vitest';
import counterReducer, { decrement } from './counterSlice.ts';
import { increment } from '@/store/reducers/counterSlice.ts';

describe('', () => {
  it('increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toStrictEqual({ value: 1 });
  });
  it('decrement', () => {
    expect(counterReducer({ value: 0 }, decrement())).toStrictEqual({ value: -1 });
  });
  it('empty state', () => {
    expect(counterReducer(undefined, decrement())).toStrictEqual({ value: -1 });
    expect(counterReducer(undefined, increment())).toStrictEqual({ value: 1 });
  });
});
