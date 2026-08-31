/**
 * Routine registry - loads each month's data on demand and derives stats from it.
 *
 * The data lives in `src/data/routines/*.json` and is pulled in with a dynamic
 * import so a page only downloads the month it actually shows, instead of
 * bundling every routine up front. Adding a month means dropping a JSON file in
 * that directory and listing its id in `src/data/months.json`.
 *
 * @module routines
 */

import monthIds from '../../data/months.json';
import { DayWorkout, MonthRoutine, RoutineStats } from './types';

export * from './types';

const cache = new Map<string, MonthRoutine>();

/**
 * Lists the months that ship with the site, oldest first
 * @returns The month identifiers, e.g. ['2025_08', '2025_09']
 */
export const getAvailableMonths = (): string[] => {
  return [...monthIds];
};

/**
 * Loads one month's routine, caching it so repeated selections are free
 * @param monthId - The month identifier, e.g. '2025_08'
 * @returns The routine, or null when the month is unknown or fails to load
 */
export const loadRoutine = async (monthId: string): Promise<MonthRoutine | null> => {
  const cached = cache.get(monthId);
  if (cached) return cached;

  if (!getAvailableMonths().includes(monthId)) {
    console.error(`Unknown routine month: ${monthId}`);
    return null;
  }

  try {
    const data = await import(
      /* webpackChunkName: "routine-[request]" */ `../../data/routines/${monthId}.json`
    );
    const routine = (data.default ?? data) as MonthRoutine;
    cache.set(monthId, routine);
    return routine;
  } catch (error) {
    console.error(`Failed to load routine for ${monthId}:`, error);
    return null;
  }
};

/**
 * Finds the workout for one week/day pair
 * @param routine - The routine to search
 * @param week - The week number
 * @param day - The day number within the week
 * @returns The matching workout, or undefined when the routine has no such day
 */
export const getWorkoutByWeekAndDay = (
  routine: MonthRoutine,
  week: number,
  day: number
): DayWorkout | undefined => {
  return routine.workoutDays.find(w => w.week === week && w.day === day);
};

/**
 * Every workout of one week
 * @param routine - The routine to search
 * @param week - The week number
 * @returns The workouts of that week, in file order
 */
export const getWeekWorkouts = (routine: MonthRoutine, week: number): DayWorkout[] => {
  return routine.workoutDays.filter(w => w.week === week);
};

/**
 * The week numbers a routine covers, sorted numerically.
 * The comparator matters: a bare sort() would order week 10 before week 2.
 * @param routine - The routine to inspect
 * @returns The ascending list of week numbers
 */
export const getWeeks = (routine: MonthRoutine): number[] => {
  return [...new Set(routine.workoutDays.map(w => w.week))].sort((a, b) => a - b);
};

/**
 * Summary counts for one routine
 * @param routine - The routine to measure
 * @returns Week and day totals plus the week range
 */
export const getRoutineStats = (routine: MonthRoutine): RoutineStats => {
  const weeks = getWeeks(routine);

  return {
    month: routine.month,
    totalWeeks: weeks.length === 0 ? 0 : weeks[weeks.length - 1],
    totalWorkoutDays: routine.workoutDays.length,
    weekRange: { min: weeks[0] ?? 0, max: weeks[weeks.length - 1] ?? 0 },
    daysPerWeek: getWeekWorkouts(routine, weeks[0] ?? 0).length,
  };
};
