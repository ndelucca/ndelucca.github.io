// August 2026 routine data - extracted from FUERZA 6-1.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_08: MonthRoutine = {
  month: '2026_08',
  warmup: {
    exercises: [
      { name: 'Puente frontal 2 apoyos', sets: '10"+10"' },
      { name: 'Buenos días c/barra', sets: '6' },
      { name: 'Puente lateral codo-rodilla', sets: '3+2' },
      { name: 'Vitalización cruzada', sets: '6' }
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
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Valijero y mozo c/mancuerna', reps: '8+8' },
        { name: 'Calambre arrodillado en polea/banda', reps: '8' },
        { name: 'Puente lateral + giro', reps: '5+4' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Bíceps 1bb c/mancuerna', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x3',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1pp en fit', reps: '6+5' },
        { name: 'Retropulsión c/barra', reps: '8' },
        { name: 'Pal of press', reps: '6+5' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Vuelo frontal c/barra', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3'
        }
      ],
      circuit: [
        { name: 'Valijero y mozo c/mancuerna', reps: '8+8' },
        { name: 'Calambre arrodillado en polea/banda', reps: '8' },
        { name: 'Puente lateral + giro', reps: '5+4' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Bíceps 1bb c/mancuerna', reps: '5+4' }
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
          workingSets: '3x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1pp en fit', reps: '6+5' },
        { name: 'Retropulsión c/barra', reps: '8' },
        { name: 'Pal of press', reps: '6+5' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Vuelo frontal c/barra', reps: '6' }
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
          rangeFSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Valijero y mozo c/mancuerna', reps: '8+8' },
        { name: 'Calambre arrodillado en polea/banda', reps: '8' },
        { name: 'Puente lateral + giro', reps: '5+4' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Bíceps 1bb c/mancuerna', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
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
        { name: 'Pullover + press 1pp en fit', reps: '6+5' },
        { name: 'Retropulsión c/barra', reps: '8' },
        { name: 'Pal of press', reps: '6+5' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Vuelo frontal c/barra', reps: '6' }
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
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '4x2',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Valijero y mozo c/mancuerna', reps: '8+8' },
        { name: 'Calambre arrodillado en polea/banda', reps: '8' },
        { name: 'Puente lateral + giro', reps: '5+4' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Bíceps 1bb c/mancuerna', reps: '5+4' }
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
          rangeFSets: '2x2'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1pp en fit', reps: '6+5' },
        { name: 'Retropulsión c/barra', reps: '8' },
        { name: 'Pal of press', reps: '6+5' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Vuelo frontal c/barra', reps: '6' }
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
        { name: 'Valijero y mozo c/mancuerna', reps: '8+8' },
        { name: 'Calambre arrodillado en polea/banda', reps: '8' },
        { name: 'Puente lateral + giro', reps: '5+4' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Bíceps 1bb c/mancuerna', reps: '5+4' }
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
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1pp en fit', reps: '6+5' },
        { name: 'Retropulsión c/barra', reps: '8' },
        { name: 'Pal of press', reps: '6+5' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Vuelo frontal c/barra', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Valijero y mozo c/mancuerna', reps: '8+8' },
        { name: 'Calambre arrodillado en polea/banda', reps: '8' },
        { name: 'Puente lateral + giro', reps: '5+4' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Bíceps 1bb c/mancuerna', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press 1pp en fit', reps: '6+5' },
        { name: 'Retropulsión c/barra', reps: '8' },
        { name: 'Pal of press', reps: '6+5' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Vuelo frontal c/barra', reps: '6' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_08.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_08.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_08.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_08.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_08.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
