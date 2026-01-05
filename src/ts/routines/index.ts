// Central export file for all monthly routines
// Import and export all available monthly routines

import { routine2025_08 } from './2025_08';
import { routine2025_09 } from './2025_09';
import { routine2025_10 } from './2025_10';
import { routine2025_11 } from './2025_11';
import { routine2025_12 } from './2025_12';
import { routine2026_01 } from './2026_01';
// Import future months here as they are added

export { routine2025_08 };
export { routine2025_09 };
export { routine2025_10 };
export { routine2025_11 };
export { routine2025_12 };
export { routine2026_01 };
// Export future months here

// Export common types
export * from './types';

// Registry of available routines
export const availableRoutines = {
  '2025_08': routine2025_08,
  '2025_09': routine2025_09,
  '2025_10': routine2025_10,
  '2025_11': routine2025_11,
  '2025_12': routine2025_12,
  '2026_01': routine2026_01,
  // Add future months here
};

// Get routine by month identifier
export const getRoutineByMonth = (monthId: string) => {
  return availableRoutines[monthId as keyof typeof availableRoutines];
};

// Get list of available months
export const getAvailableMonths = (): string[] => {
  return Object.keys(availableRoutines);
};

// Get routine statistics
export const getRoutineStats = (monthId: string) => {
  const routine = getRoutineByMonth(monthId);
  if (!routine) return null;

  const weeks = [...new Set(routine.workoutDays.map(d => d.week))];
  return {
    totalWeeks: Math.max(...weeks),
    totalWorkoutDays: routine.workoutDays.length,
    weekRange: { min: Math.min(...weeks), max: Math.max(...weeks) },
    daysPerWeek: routine.workoutDays.filter(d => d.week === 1).length
  };
};

// Get all routine statistics
export const getAllRoutineStats = () => {
  return Object.keys(availableRoutines).map(monthId => ({
    month: monthId,
    ...getRoutineStats(monthId)
  }));
};