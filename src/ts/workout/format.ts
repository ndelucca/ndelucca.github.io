/**
 * Formatting helpers shared by the workout page and its renderers
 * @module workout/format
 */

const MONTH_NAMES = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

/**
 * Turns an exercise name into a key that is safe for a storage record and a
 * data attribute. Lossy on purpose: two names that differ only in punctuation
 * collapse onto the same key, which is what keeps a selection stable when a
 * routine tweaks the spelling of an exercise.
 * @param name - The exercise name as written in the routine
 * @returns A lowercase identifier made of letters, digits and underscores
 */
export const sanitizeExerciseName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9_]/g, '');
};

/**
 * Renders a month identifier for the selector
 * @param monthId - The identifier, e.g. '2025_09'
 * @returns The Spanish month and year, e.g. 'Septiembre 2025'
 */
export const formatMonthDisplay = (monthId: string): string => {
  const [year, monthNumber] = monthId.split('_');
  const monthName = MONTH_NAMES[parseInt(monthNumber, 10) - 1];

  return monthName ? `${monthName} ${year}` : `Mes ${monthNumber} ${year}`;
};

/**
 * Escapes text before it goes into an HTML string.
 * The routine data ships with the site, but the renderers build markup by
 * concatenation, so escaping keeps a stray `<` in an exercise name from
 * breaking the table it lands in.
 * @param value - The text to escape
 * @returns The text with HTML metacharacters replaced by entities
 */
export const escapeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

/**
 * Strips the trailing "reps" wording the routine sheets carry
 * @param value - A cell value such as '5 reps'
 * @returns The value without the reps suffix, e.g. '5'
 */
export const stripRepsSuffix = (value: string): string => {
  return value.replace(/\s*reps?\s*/i, '').trim();
};
