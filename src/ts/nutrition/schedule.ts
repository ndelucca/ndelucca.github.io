/**
 * Training-day detection for the diet plan
 * @module nutrition/schedule
 */

// Days the routine is trained: Monday, Wednesday and Friday (Date.getDay() numbering)
export const TRAINING_WEEKDAYS: readonly number[] = [1, 3, 5];

const WEEKDAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

const MONTH_NAMES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

/**
 * Tells whether a date falls on a training weekday
 * @param date - The date to check
 * @returns True when the date is a Monday, Wednesday or Friday
 */
export const isTrainingWeekday = (date: Date): boolean => {
  return TRAINING_WEEKDAYS.includes(date.getDay());
};

/**
 * Spanish name of the weekday
 * @param date - The date to name
 * @returns The lowercase weekday name, e.g. 'domingo'
 */
export const getWeekdayName = (date: Date): string => {
  return WEEKDAY_NAMES[date.getDay()];
};

/**
 * Human readable date used in the page header
 * @param date - The date to format
 * @returns A string like 'domingo 30 de agosto'
 */
export const formatLongDate = (date: Date): string => {
  return `${getWeekdayName(date)} ${date.getDate()} de ${MONTH_NAMES[date.getMonth()]}`;
};

/**
 * Stable per-day key used to expire the manual override at midnight.
 * Built from local date parts on purpose: toISOString() shifts to UTC and would
 * report tomorrow's date from 21hs onwards in Argentina.
 * @param date - The date to key
 * @returns A 'YYYY-MM-DD' string in local time
 */
export const formatDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};
