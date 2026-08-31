// Test suite for the routine registry and its helpers
import months from '../data/months.json';
import august2025 from '../data/routines/2025_08.json';
import october2025 from '../data/routines/2025_10.json';
import december2025 from '../data/routines/2025_12.json';
import {
  getAvailableMonths,
  getRoutineStats,
  getWeeks,
  getWeekWorkouts,
  getWorkoutByWeekAndDay,
  loadRoutine,
} from '../ts/routines/index';
import { MonthRoutine } from '../ts/routines/types';

const august = august2025 as MonthRoutine;
const october = october2025 as MonthRoutine;
const december = december2025 as MonthRoutine;

describe('Month registry', () => {
  test('Every listed month has a data file that loads', async () => {
    for (const monthId of getAvailableMonths()) {
      const routine = await loadRoutine(monthId);
      expect(routine).not.toBeNull();
      expect(routine?.month).toBe(monthId);
    }
  });

  test('Months are listed oldest first', () => {
    expect(getAvailableMonths()).toEqual([...months].sort());
  });

  test('An unknown month resolves to null instead of throwing', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    await expect(loadRoutine('1999_01')).resolves.toBeNull();
  });
});

describe('Routine shape', () => {
  test('Routines cover 3, 4 or 5 weeks of 3 days', () => {
    const cases: Array<[MonthRoutine, number, number]> = [
      [august, 4, 12],
      [october, 5, 15],
      [december, 3, 9],
    ];

    for (const [routine, weeks, days] of cases) {
      expect(getWeeks(routine)).toHaveLength(weeks);
      expect(routine.workoutDays).toHaveLength(days);
    }
  });

  test('Weeks come back in numeric order', () => {
    expect(getWeeks(october)).toEqual([1, 2, 3, 4, 5]);
  });

  test('Every routine ships defaults for the exercises it uses', async () => {
    for (const monthId of getAvailableMonths()) {
      const routine = await loadRoutine(monthId);
      const named = new Set(
        routine?.workoutDays.flatMap(day => day.mainExercises.map(e => e.name)) ?? []
      );

      for (const exercise of named) {
        expect(Object.keys(routine?.defaults ?? {})).toContain(exercise);
      }
    }
  });
});

describe('Workout lookup', () => {
  test('Finds a workout by week and day', () => {
    const workout = getWorkoutByWeekAndDay(august, 2, 3);
    expect(workout?.week).toBe(2);
    expect(workout?.day).toBe(3);
  });

  test('Returns undefined for a day the routine does not have', () => {
    expect(getWorkoutByWeekAndDay(december, 9, 1)).toBeUndefined();
  });

  test('A week holds three days', () => {
    expect(getWeekWorkouts(october, 5).map(w => w.day)).toEqual([1, 2, 3]);
  });
});

describe('Routine stats', () => {
  test('Reports weeks, days and the week range', () => {
    expect(getRoutineStats(october)).toEqual({
      month: '2025_10',
      totalWeeks: 5,
      totalWorkoutDays: 15,
      weekRange: { min: 1, max: 5 },
      daysPerWeek: 3,
    });
  });

  test('Every shipped routine trains three days a week', async () => {
    for (const monthId of getAvailableMonths()) {
      const routine = await loadRoutine(monthId);
      expect(getRoutineStats(routine as MonthRoutine).daysPerWeek).toBe(3);
    }
  });
});
