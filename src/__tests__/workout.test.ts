// Test suite for the workout page's data layer: the reference table, the
// formatting helpers, the renderers and localStorage.
import august2025 from '../data/routines/2025_08.json';
import { MonthRoutine } from '../ts/routines/types';
import { COLUMN, findRowByMaxWeight, getWeight, gymTable } from '../ts/workout/gymTable';
import {
  escapeHtml,
  formatMonthDisplay,
  sanitizeExerciseName,
  stripRepsSuffix,
} from '../ts/workout/format';
import {
  renderCircuitSection,
  renderGymTableRows,
  renderMainExercisesSection,
  renderWorkoutDay,
} from '../ts/workout/render';
import {
  isAuthenticated,
  loadExerciseSelections,
  loadLastSelectedDay,
  loadLastSelectedMonth,
  removeExerciseSelection,
  saveAuthentication,
  saveExerciseSelection,
  saveLastSelectedDay,
  saveLastSelectedMonth,
} from '../ts/workout/storage';

const august = august2025 as MonthRoutine;
const firstDay = august.workoutDays[0];

describe('Gym reference table', () => {
  test('Holds 61 rows of 8 loads', () => {
    expect(gymTable).toHaveLength(61);
    expect(gymTable.every(row => row.length === 8)).toBe(true);
  });

  test('Reads a cell by row and column', () => {
    expect(getWeight(0, COLUMN.percentage55)).toBe('27.5');
    expect(getWeight(0, COLUMN.max)).toBe('50');
  });

  test('Out of range lookups return null rather than throwing', () => {
    expect(getWeight(-1, COLUMN.max)).toBeNull();
    expect(getWeight(999, COLUMN.max)).toBeNull();
    expect(getWeight(0, 99)).toBeNull();
  });

  test('Finds the row for a whole-kilo 1RM', () => {
    const row = findRowByMaxWeight(100);
    expect(row).toBeDefined();
    expect(getWeight(row as number, COLUMN.max)).toBe('100');
  });

  test('Finds the row for a half-kilo 1RM, which parseInt used to truncate', () => {
    const row = findRowByMaxWeight(97.5);
    expect(row).toBeDefined();
    expect(getWeight(row as number, COLUMN.max)).toBe('97.5');
  });

  test('A 1RM no row carries returns undefined', () => {
    expect(findRowByMaxWeight(1)).toBeUndefined();
  });
});

describe('Formatting helpers', () => {
  test('Month ids read as Spanish months', () => {
    expect(formatMonthDisplay('2025_09')).toBe('Septiembre 2025');
    expect(formatMonthDisplay('2026_01')).toBe('Enero 2026');
    expect(formatMonthDisplay('2025_12')).toBe('Diciembre 2025');
  });

  test('An out of range month falls back instead of printing undefined', () => {
    expect(formatMonthDisplay('2025_13')).toBe('Mes 13 2025');
  });

  test('Exercise names become storage safe ids', () => {
    // Accents are dropped rather than folded, so 'atrás' keys as 'atrs'
    expect(sanitizeExerciseName('Sentadillas atrás')).toBe('sentadillas_atrs');
    // '+' is dropped without a separator, so 'Bíceps+press' keys as 'bcepspress'
    expect(sanitizeExerciseName('Bíceps+press 1bb y pp contraria')).toBe(
      'bcepspress_1bb_y_pp_contraria'
    );
  });

  test('The reps suffix is stripped from cell values', () => {
    expect(stripRepsSuffix('5 reps')).toBe('5');
    expect(stripRepsSuffix('1 rep')).toBe('1');
    expect(stripRepsSuffix('4x2')).toBe('4x2');
  });

  test('HTML metacharacters are escaped', () => {
    expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
    expect(escapeHtml('a & b')).toBe('a &amp; b');
  });
});

describe('Rendering a workout day', () => {
  const context = { selections: {}, defaults: august.defaults };

  test('Renders the three sections with the week and day heading', () => {
    const html = renderWorkoutDay(firstDay, august.warmup, context);

    expect(html).toContain('Semana 1 - Día 1');
    expect(html).toContain('Entrada en Calor');
    expect(html).toContain('Ejercicios Principales');
    expect(html).toContain('Circuito Final');
  });

  test('Falls back to the routine default when nothing is selected', () => {
    const html = renderMainExercisesSection(firstDay.mainExercises, context);
    const exercise = firstDay.mainExercises[0];
    const row = findRowByMaxWeight(august.defaults[exercise.name]);

    expect(row).toBeDefined();
    expect(html).toContain(`<option value="${row}" selected>`);
  });

  test('A stored selection wins over the routine default', () => {
    const exercise = firstDay.mainExercises[0];
    const html = renderMainExercisesSection(firstDay.mainExercises, {
      selections: { [sanitizeExerciseName(exercise.name)]: 3 },
      defaults: august.defaults,
    });

    expect(html).toContain('<option value="3" selected>');
  });

  test('Cells are annotated with the weight the selected row implies', () => {
    const exercise = firstDay.mainExercises[0];
    const html = renderMainExercisesSection([exercise], {
      selections: { [sanitizeExerciseName(exercise.name)]: 0 },
      defaults: {},
    });

    expect(html).toContain(
      `(${getWeight(0, COLUMN.rangeEMin)}-${getWeight(0, COLUMN.rangeEMax)} kg)`
    );
  });

  test('Without a row the cells show reps only, with no weight', () => {
    const html = renderMainExercisesSection(firstDay.mainExercises, {
      selections: {},
      defaults: {},
    });

    expect(html).not.toContain(' kg)');
    expect(html).toContain('Máximo...');
  });

  test('An absent Rango F renders a dash rather than "undefined"', () => {
    const html = renderMainExercisesSection(
      [{ name: 'Test', warmupSets: {}, workingSets: '3x3' }],
      { selections: {}, defaults: {} }
    );

    expect(html).not.toContain('undefined');
    expect(html).toContain('<td>-</td>');
  });

  test('Exercise names are escaped on the way into the markup', () => {
    const html = renderCircuitSection([{ name: '<b>x</b>', reps: '5' }], 3);

    expect(html).toContain('&lt;b&gt;x&lt;/b&gt;');
    expect(html).not.toContain('<b>x</b>');
  });

  test('The reference table renders one numbered row per 1RM level', () => {
    const rows = renderGymTableRows();

    expect(rows.match(/<tr>/g)).toHaveLength(61);
    expect(rows).toContain('<td class="row-number">1</td>');
    expect(rows).toContain('<td class="row-number">61</td>');
  });
});

describe('Workout storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('A selection round-trips through localStorage', () => {
    saveExerciseSelection('2025_08', 'sentadillas', 12);

    expect(loadExerciseSelections('2025_08')).toEqual({ sentadillas: 12 });
  });

  test('Selections are kept apart per month', () => {
    saveExerciseSelection('2025_08', 'sentadillas', 12);
    saveExerciseSelection('2025_09', 'sentadillas', 20);

    expect(loadExerciseSelections('2025_08')).toEqual({ sentadillas: 12 });
    expect(loadExerciseSelections('2025_09')).toEqual({ sentadillas: 20 });
  });

  test('Removing a selection leaves the other months alone', () => {
    saveExerciseSelection('2025_08', 'sentadillas', 12);
    saveExerciseSelection('2025_09', 'sentadillas', 20);
    removeExerciseSelection('2025_08', 'sentadillas');

    expect(loadExerciseSelections('2025_08')).toEqual({});
    expect(loadExerciseSelections('2025_09')).toEqual({ sentadillas: 20 });
  });

  test('The old flat format is migrated onto every known month', () => {
    localStorage.setItem('workout_exercise_selections', JSON.stringify({ sentadillas: 7 }));

    expect(loadExerciseSelections('2025_08', ['2025_08', '2025_09'])).toEqual({ sentadillas: 7 });
    expect(loadExerciseSelections('2025_09', ['2025_08', '2025_09'])).toEqual({ sentadillas: 7 });
  });

  test('Corrupt storage reads as empty instead of throwing', () => {
    localStorage.setItem('workout_exercise_selections', 'not json');

    expect(loadExerciseSelections('2025_08')).toEqual({});
  });

  test('The last day and month round-trip', () => {
    saveLastSelectedDay({ week: 3, day: 2 });
    saveLastSelectedMonth('2026_01');

    expect(loadLastSelectedDay()).toEqual({ week: 3, day: 2 });
    expect(loadLastSelectedMonth()).toBe('2026_01');
  });

  test('A malformed stored day is rejected', () => {
    localStorage.setItem('workout_last_selected_day', JSON.stringify({ week: 'x' }));

    expect(loadLastSelectedDay()).toBeNull();
  });

  test('Authentication starts off and sticks once saved', () => {
    expect(isAuthenticated()).toBe(false);

    saveAuthentication();

    expect(isAuthenticated()).toBe(true);
  });
});
