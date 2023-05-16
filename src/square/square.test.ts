import { describe, vi } from 'vitest';
import { square } from '@/square/square.ts';

describe('square', () => {
  it('корректное значение', function () {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
    const spyMathPow = vi.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
});
