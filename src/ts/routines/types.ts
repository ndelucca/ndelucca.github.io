// Common interfaces for workout routines
// These types are shared across all monthly routine files

export interface WarmupExercise {
  name: string;
  sets: string; // e.g., "6 BD 1pp/4+3", "4 Vit/6"
}

export interface MainExercise {
  name: string;
  warmupSets: { // 55%, 65%, 75%
    percentage55?: string; // e.g., "5 reps"
    percentage65?: string; // e.g., "5 reps"  
    percentage75?: string; // e.g., "5 reps", "4 reps"
  };
  workingSets: string; // e.g., "4x2", "4x3", "5x3" - Rango E
  rangeFSets?: string; // Optional field for future routines with Rango F exercises
}

export interface CircuitExercise {
  name: string;
  reps: string; // e.g., "4", "6+5", "8", "20\"", "15\"+15\""
}

export interface DayWorkout {
  day: number; // 1, 2, 3 (days per week)
  week: number; // Week number (varies by routine: 1-4 for most, 1-5 for some)
  mainExercises: MainExercise[];
  circuit: CircuitExercise[];
  circuitRounds: number; // Usually 3
}

export interface MonthRoutine {
  month: string; // e.g., "2025_08", "2025_09"
  warmup: {
    exercises: WarmupExercise[];
    totalRounds: number; // Usually 3
  };
  workoutDays: DayWorkout[];
  ranges: {
    rangeE: string; // "80% - 87.5% del 1RM"
    rangeF: string; // "87.5% - 95% del 1RM (patrón siguiente)"
  };
}

// Utility function types
export type WeekWorkoutGetter = (week: number, day: number) => DayWorkout | undefined;
export type WeekWorkoutsGetter = (week: number) => DayWorkout[];
export type AllWeeksGetter = () => number[];

// Helper functions for working with routines
export interface RoutineHelpers {
  getWorkoutByWeekAndDay: WeekWorkoutGetter;
  getCurrentWeekWorkouts: WeekWorkoutsGetter;
  getAllWeeks: AllWeeksGetter;
  getTotalWeeks: () => number;
  getTotalWorkoutDays: () => number;
  getWeekRange: () => { min: number; max: number };
}