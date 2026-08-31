/**
 * Shared types for the monthly workout routines
 * @module routines/types
 */

export interface WarmupExercise {
  name: string;
  sets: string; // e.g., '6 BD 1pp/4+3', '4 Vit/6'
}

export interface MainExercise {
  name: string;
  warmupSets: {
    percentage55?: string; // e.g., '5 reps'
    percentage65?: string;
    percentage75?: string;
  };
  workingSets: string; // Rango E, e.g., '4x2', '4x3', '5x3'
  rangeFSets?: string; // Rango F, only in some routines
  maxSets?: string; // Max-effort attempts at 1RM (column MAX)
}

export interface CircuitExercise {
  name: string;
  reps: string; // e.g., '4', '6+5', '20"', '15"+15"'
}

export interface DayWorkout {
  day: number; // 1..3
  week: number; // 1..5 depending on the routine
  mainExercises: MainExercise[];
  circuit: CircuitExercise[];
  circuitRounds: number;
}

export interface MonthRoutine {
  month: string; // e.g., '2025_08'
  warmup: {
    exercises: WarmupExercise[];
    totalRounds: number;
  };
  ranges: {
    rangeE: string; // '80% - 87.5% del 1RM'
    rangeF: string; // '87.5% - 95% del 1RM'
  };
  /** Starting 1RM per main exercise, in kg, used until the user picks a row */
  defaults: Record<string, number>;
  workoutDays: DayWorkout[];
}

export interface RoutineStats {
  month: string;
  totalWeeks: number;
  totalWorkoutDays: number;
  weekRange: { min: number; max: number };
  daysPerWeek: number;
}
