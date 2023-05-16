import { describe, it } from 'vitest';
import { validateValue } from '@/validateValue/validateValue.ts';

describe('validateValue', () => {
  it('Корректное значения', () => {
    expect(validateValue(50)).toBe(true);
  });
  it('Меньше значения', () => {
    expect(validateValue(-1)).toBe(false);
  });
  it('Валидация значения', () => {
    expect(validateValue(101)).toBe(false);
  });
  it('Пограничное значения', () => {
    expect(validateValue(100)).toBe(true);
  });
});
