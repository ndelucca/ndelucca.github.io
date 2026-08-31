// Test suite for the local cowsay renderer
import { randomCow } from '../ts/modules/cow';

const balloonOf = (output: string): string[] => {
  return output
    .split('\n')
    .filter(line => !line.includes('^__^') && !/\|\||\(oo\)|\(__\)/.test(line));
};

describe('Cow rendering', () => {
  test('A short message uses the single line balloon', () => {
    const lines = balloonOf(randomCow('moo'));

    expect(lines[0]).toBe(' _____');
    expect(lines[1]).toBe('< moo >');
    expect(lines[2]).toBe(' -----');
  });

  test('The borders match the width of the text', () => {
    const lines = balloonOf(randomCow('hello'));

    expect(lines[0]).toBe(' _______');
    expect(lines[1]).toBe('< hello >');
  });

  test('The cow is always drawn below the balloon', () => {
    const output = randomCow('moo');

    expect(output).toContain('^__^');
    expect(output).toContain('(oo)');
    expect(output.indexOf('< moo >')).toBeLessThan(output.indexOf('^__^'));
  });

  test('Long text wraps and switches to the multi line frame', () => {
    const long = 'The best time to plant a tree was 20 years ago, the second best time is now';
    const lines = balloonOf(randomCow(long));

    expect(lines.length).toBeGreaterThan(3);
    expect(lines[1].startsWith('/')).toBe(true);
    expect(lines[1].endsWith('\\')).toBe(true);
    expect(lines[lines.length - 2].startsWith('\\')).toBe(true);
    expect(lines[lines.length - 2].endsWith('/')).toBe(true);
  });

  test('Wrapped lines are padded to a common width', () => {
    const lines = balloonOf(randomCow('one two three four five six seven eight nine ten eleven'));
    const bodyLines = lines.slice(1, -1);
    const widths = new Set(bodyLines.map(line => line.length));

    expect(widths.size).toBe(1);
  });

  test('No line exceeds the balloon width', () => {
    const lines = balloonOf(randomCow('a'.repeat(200)));

    for (const line of lines) {
      expect(line.length).toBeLessThanOrEqual(44);
    }
  });

  test('An empty message still renders a cow', () => {
    expect(randomCow('')).toContain('^__^');
  });
});
