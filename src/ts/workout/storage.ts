/**
 * Everything the workout page keeps in localStorage.
 *
 * Each function takes the month it acts on rather than reading a module level
 * "current month", so the storage layer stays free of page state and can be
 * exercised directly in tests.
 *
 * @module workout/storage
 */

const EXERCISE_SELECTIONS_KEY = 'workout_exercise_selections';
const LAST_SELECTED_DAY_KEY = 'workout_last_selected_day';
const LAST_SELECTED_MONTH_KEY = 'workout_last_selected_month';
const LOGIN_AUTH_KEY = 'workout_authenticated';

const MONTH_ID_PATTERN = /^\d{4}_\d{2}$/;

/** The week/day pair the page reopens on */
export interface SelectedDay {
  week: number;
  day: number;
}

/** Exercise id to reference-table row, grouped by month */
type SelectionsByMonth = Record<string, Record<string, number>>;

/**
 * Reads a JSON value from localStorage, treating any failure as "nothing stored"
 * @param key - The storage key
 * @returns The parsed value, or null when missing or unreadable
 */
const readJson = <T>(key: string): T | null => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : null;
  } catch {
    return null;
  }
};

/**
 * Writes a JSON value to localStorage
 * @param key - The storage key
 * @param value - The value to serialise
 */
const writeJson = (key: string, value: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to write ${key}:`, error);
  }
};

/**
 * Tells the per-month layout apart from the flat one the page used to write.
 * The flat format keyed selections by exercise id at the top level; the current
 * one nests them under a month id.
 * @param data - The raw stored object
 * @returns True when every top level key is a month id
 */
const isGroupedByMonth = (data: object): boolean => {
  return Object.keys(data).every(key => MONTH_ID_PATTERN.test(key));
};

/**
 * Loads every month's exercise selections, migrating the old flat format on the
 * way. A flat record predates per-month selections, so it is copied onto all
 * known months rather than dropped, which keeps existing picks visible.
 * @param knownMonths - The months a migrated flat record should be copied onto
 * @returns The selections grouped by month
 */
export const loadAllExerciseSelections = (knownMonths: string[] = []): SelectionsByMonth => {
  const data = readJson<Record<string, unknown>>(EXERCISE_SELECTIONS_KEY);
  if (!data || typeof data !== 'object') return {};

  if (isGroupedByMonth(data)) return data as SelectionsByMonth;

  const migrated: SelectionsByMonth = {};
  for (const month of knownMonths) {
    migrated[month] = { ...(data as Record<string, number>) };
  }
  writeJson(EXERCISE_SELECTIONS_KEY, migrated);

  return migrated;
};

/**
 * The exercise selections of one month
 * @param monthId - The month to read
 * @param knownMonths - Passed through to the flat format migration
 * @returns Exercise id to reference-table row index
 */
export const loadExerciseSelections = (
  monthId: string,
  knownMonths: string[] = []
): Record<string, number> => {
  if (!monthId) return {};
  return loadAllExerciseSelections(knownMonths)[monthId] ?? {};
};

/**
 * Stores the reference-table row picked for one exercise
 * @param monthId - The month the selection belongs to
 * @param exerciseId - The sanitised exercise name
 * @param rowIndex - The chosen row of the reference table
 */
export const saveExerciseSelection = (
  monthId: string,
  exerciseId: string,
  rowIndex: number
): void => {
  if (!monthId) {
    console.error('Cannot save exercise selection: no month selected');
    return;
  }

  const all = loadAllExerciseSelections();
  all[monthId] = { ...all[monthId], [exerciseId]: rowIndex };
  writeJson(EXERCISE_SELECTIONS_KEY, all);
};

/**
 * Drops the stored selection for one exercise, falling back to the routine default
 * @param monthId - The month the selection belongs to
 * @param exerciseId - The sanitised exercise name
 */
export const removeExerciseSelection = (monthId: string, exerciseId: string): void => {
  if (!monthId) {
    console.error('Cannot remove exercise selection: no month selected');
    return;
  }

  const all = loadAllExerciseSelections();
  if (all[monthId]) {
    delete all[monthId][exerciseId];
    writeJson(EXERCISE_SELECTIONS_KEY, all);
  }
};

/**
 * Remembers the day the user was looking at
 * @param day - The week/day pair
 */
export const saveLastSelectedDay = (day: SelectedDay): void => {
  writeJson(LAST_SELECTED_DAY_KEY, day);
};

/**
 * The day the page should reopen on
 * @returns The stored week/day pair, or null when absent or malformed
 */
export const loadLastSelectedDay = (): SelectedDay | null => {
  const data = readJson<SelectedDay>(LAST_SELECTED_DAY_KEY);
  if (data && typeof data.week === 'number' && typeof data.day === 'number') {
    return data;
  }
  return null;
};

/**
 * Remembers the month the user was looking at
 * @param monthId - The month identifier
 */
export const saveLastSelectedMonth = (monthId: string): void => {
  try {
    localStorage.setItem(LAST_SELECTED_MONTH_KEY, monthId);
  } catch (error) {
    console.error('Failed to save last selected month:', error);
  }
};

/**
 * The month the page should reopen on
 * @returns The stored month identifier, or null
 */
export const loadLastSelectedMonth = (): string | null => {
  try {
    return localStorage.getItem(LAST_SELECTED_MONTH_KEY);
  } catch {
    return null;
  }
};

/**
 * Records that the password prompt was cleared on this browser
 */
export const saveAuthentication = (): void => {
  try {
    localStorage.setItem(LOGIN_AUTH_KEY, 'true');
  } catch (error) {
    console.error('Failed to save authentication status:', error);
  }
};

/**
 * Whether the password prompt was already cleared on this browser
 * @returns True when the prompt can be skipped
 */
export const isAuthenticated = (): boolean => {
  try {
    return localStorage.getItem(LOGIN_AUTH_KEY) === 'true';
  } catch {
    return false;
  }
};
