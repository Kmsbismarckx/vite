import { describe, it } from 'vitest';
import { mapArrToString } from '@/mapArrToString/mapArrToString.ts';

describe('mapArrToString', () => {
  it('Корректное значения', () => {
    expect(mapArrToString([1, 2, 3])).toStrictEqual(['1', '2', '3']);
  });
  it('Мешанина', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'asdas'])).toStrictEqual(['1', '2', '3']);
  });
  it('Пустой массив', () => {
    expect(mapArrToString([])).toStrictEqual([]);
  });
  it('Отрицание', () => {
    expect(mapArrToString([1, 2, 3])).not.toStrictEqual([1, 2, 3, 4]);
  });
});
