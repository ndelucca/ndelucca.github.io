// June 2026 routine data - extracted from FUERZA 4-1.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_06: MonthRoutine = {
  month: '2026_06',
  warmup: {
    exercises: [
      { name: 'Adelante y atrás en fit', sets: '6' },
      { name: 'Giros c/barra', sets: '8' },
      { name: 'Angelito invertido', sets: '6' },
      { name: 'Metida de arranque 1bb c/mancuerna', sets: '3+2' }
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
          workingSets: '2x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Valijero c/mancuerna', reps: '8+8' },
        { name: 'Calambre 1bb c/mancuerna', reps: '6+6' },
        { name: 'Twist c/disco en fit ball', reps: '12' },
        { name: 'Lumbares pp c/peso', reps: '8' },
        { name: 'Bíceps + press inestable', reps: '9' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2 reps',
          rangeFSets: '2 reps'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2 reps',
          rangeFSets: '2 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2 reps',
          rangeFSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1bb en fit', reps: '6+5' },
        { name: 'Retropulsión c/banda', reps: '8' },
        { name: 'Giro c/banda', reps: '6+5' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Vuelo posterior bajando 6T', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Valijero c/mancuerna', reps: '8+8' },
        { name: 'Calambre 1bb c/mancuerna', reps: '6+6' },
        { name: 'Twist c/disco en fit ball', reps: '12' },
        { name: 'Lumbares pp c/peso', reps: '8' },
        { name: 'Bíceps + press inestable', reps: '9' }
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
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1bb en fit', reps: '6+5' },
        { name: 'Retropulsión c/banda', reps: '8' },
        { name: 'Giro c/banda', reps: '6+5' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Vuelo posterior bajando 6T', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Valijero c/mancuerna', reps: '8+8' },
        { name: 'Calambre 1bb c/mancuerna', reps: '6+6' },
        { name: 'Twist c/disco en fit ball', reps: '12' },
        { name: 'Lumbares pp c/peso', reps: '8' },
        { name: 'Bíceps + press inestable', reps: '9' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x3'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1bb en fit', reps: '6+5' },
        { name: 'Retropulsión c/banda', reps: '8' },
        { name: 'Giro c/banda', reps: '6+5' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Vuelo posterior bajando 6T', reps: '6' }
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
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Valijero c/mancuerna', reps: '8+8' },
        { name: 'Calambre 1bb c/mancuerna', reps: '6+6' },
        { name: 'Twist c/disco en fit ball', reps: '12' },
        { name: 'Lumbares pp c/peso', reps: '8' },
        { name: 'Bíceps + press inestable', reps: '9' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2 reps'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1bb en fit', reps: '6+5' },
        { name: 'Retropulsión c/banda', reps: '8' },
        { name: 'Giro c/banda', reps: '6+5' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Vuelo posterior bajando 6T', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
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
        { name: 'Valijero c/mancuerna', reps: '8+8' },
        { name: 'Calambre 1bb c/mancuerna', reps: '6+6' },
        { name: 'Twist c/disco en fit ball', reps: '12' },
        { name: 'Lumbares pp c/peso', reps: '8' },
        { name: 'Bíceps + press inestable', reps: '9' }
      ],
      circuitRounds: 3
    },
    // SEMANA 4
    {
      day: 1,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '2 reps'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '2 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1bb en fit', reps: '6+5' },
        { name: 'Retropulsión c/banda', reps: '8' },
        { name: 'Giro c/banda', reps: '6+5' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Vuelo posterior bajando 6T', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '2 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '2 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '2 reps' },
          workingSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Valijero c/mancuerna', reps: '8+8' },
        { name: 'Calambre 1bb c/mancuerna', reps: '6+6' },
        { name: 'Twist c/disco en fit ball', reps: '12' },
        { name: 'Lumbares pp c/peso', reps: '8' },
        { name: 'Bíceps + press inestable', reps: '9' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1bb en fit', reps: '6+5' },
        { name: 'Retropulsión c/banda', reps: '8' },
        { name: 'Giro c/banda', reps: '6+5' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Vuelo posterior bajando 6T', reps: '6' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_06.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_06.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_06.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_06.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_06.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
