// Test suite for the Wikipedia "on this day" date path
import { buildDatePath } from '../ts/modules/wikiApi';

describe('buildDatePath', () => {
  test('uses the calendar month, not the zero based index', () => {
    // 30 de agosto de 2026: getMonth() devuelve 7, la API espera 08
    expect(buildDatePath(new Date(2026, 7, 30))).toBe('08/30');
  });

  test('uses the day of the month, not the weekday', () => {
    // 30/08/2026 cae domingo: getDay() devuelve 0, que no es un día válido
    expect(buildDatePath(new Date(2026, 7, 30))).not.toContain('/0');
  });

  test('zero pads single digit months and days', () => {
    expect(buildDatePath(new Date(2026, 0, 1))).toBe('01/01');
    expect(buildDatePath(new Date(2026, 8, 9))).toBe('09/09');
  });

  test('keeps the local day for a late night visit', () => {
    expect(buildDatePath(new Date(2026, 11, 31, 23, 30))).toBe('12/31');
  });
});
