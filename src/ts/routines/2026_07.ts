// July 2026 routine data - extracted from FUERZA 5.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_07: MonthRoutine = {
  month: '2026_07',
  warmup: {
    exercises: [
      { name: 'Revolver la olla', sets: '6+6' },
      { name: 'Peso muerto 1pp', sets: '5+4' },
      { name: 'Movilidad tobillo y cadera c/banda', sets: '5+4' },
      { name: 'Vitalización cruzada c/disco', sets: '6' }
    ],
    totalRounds: 3
  },
  ranges: {
    rangeE: '80% - 87.5% del 1RM',
    rangeF: '87.5% - 95% del 1RM'
  },
  workoutDays: [
    // SEMANA 1
    {
      day: 1,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Hell de tronco c/disco en espalda', reps: '20"' },
        { name: 'Elevaciones de tronco lateral suspendido', reps: '7+6' },
        { name: 'Ascenso en plancha', reps: '4' },
        { name: 'Bíceps + press arrodillado inestable', reps: '6' },
        { name: 'Calesita c/ketebell', reps: '8+8' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '3 reps'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '3 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Elevaciones pp colgado c/mancuerna', reps: '8' },
        { name: 'Buenos Días sentado c/peso', reps: '6' },
        { name: 'Giros c/banda', reps: '7+6' },
        { name: 'Tríceps c/banda', reps: '8' },
        { name: 'Pullover + press en banco 1pp', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3'
        }
      ],
      circuit: [
        { name: 'Hell de tronco c/disco en espalda', reps: '20"' },
        { name: 'Elevaciones de tronco lateral suspendido', reps: '7+6' },
        { name: 'Ascenso en plancha', reps: '4' },
        { name: 'Bíceps + press arrodillado inestable', reps: '6' },
        { name: 'Calesita c/ketebell', reps: '8+8' }
      ],
      circuitRounds: 3
    },
    // SEMANA 2
    {
      day: 1,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '4x3',
          rangeFSets: '2 reps',
          maxSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '4x3',
          rangeFSets: '2 reps',
          maxSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '4x3',
          rangeFSets: '2 reps',
          maxSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Elevaciones pp colgado c/mancuerna', reps: '8' },
        { name: 'Buenos Días sentado c/peso', reps: '6' },
        { name: 'Giros c/banda', reps: '7+6' },
        { name: 'Tríceps c/banda', reps: '8' },
        { name: 'Pullover + press en banco 1pp', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '5x2',
          rangeFSets: '3 reps',
          maxSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '5x2',
          rangeFSets: '3 reps',
          maxSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '5x2',
          rangeFSets: '3 reps',
          maxSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Hell de tronco c/disco en espalda', reps: '20"' },
        { name: 'Elevaciones de tronco lateral suspendido', reps: '7+6' },
        { name: 'Ascenso en plancha', reps: '4' },
        { name: 'Bíceps + press arrodillado inestable', reps: '6' },
        { name: 'Calesita c/ketebell', reps: '8+8' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '3 reps'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '3 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Elevaciones pp colgado c/mancuerna', reps: '8' },
        { name: 'Buenos Días sentado c/peso', reps: '6' },
        { name: 'Giros c/banda', reps: '7+6' },
        { name: 'Tríceps c/banda', reps: '8' },
        { name: 'Pullover + press en banco 1pp', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    // SEMANA 3
    {
      day: 1,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Hell de tronco c/disco en espalda', reps: '20"' },
        { name: 'Elevaciones de tronco lateral suspendido', reps: '7+6' },
        { name: 'Ascenso en plancha', reps: '4' },
        { name: 'Bíceps + press arrodillado inestable', reps: '6' },
        { name: 'Calesita c/ketebell', reps: '8+8' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Elevaciones pp colgado c/mancuerna', reps: '8' },
        { name: 'Buenos Días sentado c/peso', reps: '6' },
        { name: 'Giros c/banda', reps: '7+6' },
        { name: 'Tríceps c/banda', reps: '8' },
        { name: 'Pullover + press en banco 1pp', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Hell de tronco c/disco en espalda', reps: '20"' },
        { name: 'Elevaciones de tronco lateral suspendido', reps: '7+6' },
        { name: 'Ascenso en plancha', reps: '4' },
        { name: 'Bíceps + press arrodillado inestable', reps: '6' },
        { name: 'Calesita c/ketebell', reps: '8+8' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_07.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_07.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_07.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_07.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_07.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
