import { describe, it } from 'vitest';
import { delay } from '@/delay/delay.ts';

describe('delay', () => {
  it('корректное значение', async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
