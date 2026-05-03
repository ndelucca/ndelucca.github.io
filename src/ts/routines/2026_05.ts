// May 2026 routine data - extracted from FUERZA 3-1.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_05: MonthRoutine = {
  month: '2026_05',
  warmup: {
    exercises: [
      { name: 'Calambre c/manc 1bb', sets: '4+3' },
      { name: 'Tracción TRX', sets: '6' },
      { name: 'Puente lat + giro', sets: '4+3' },
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
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Vuelo lat iso + vuelo front c/mancuerna', reps: '8+7' },
        { name: '½ giro barra punta', reps: '8' },
        { name: 'Extensiones pp suspendido', reps: '6' },
        { name: 'Rueda 3 direcciones elevado', reps: '9' },
        { name: 'Tusam 1pp', reps: '15"+15"' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Twist suspendido c/disco', reps: '12' },
        { name: 'Calambre c/disco', reps: '8' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Retropulsión c/barra (vuelta lenta)', reps: '6' },
        { name: 'Pullover + press + apertura en fit', reps: '5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Antepulsión TRX', reps: '8' },
        { name: 'Lateralizaciones en fit', reps: '12' },
        { name: 'Superman invertido en fit', reps: '20"' },
        { name: 'Descenso bb diamante 8T', reps: '6' },
        { name: 'Bíceps a la frente c/barra W', reps: '10' }
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
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Twist suspendido c/disco', reps: '12' },
        { name: 'Calambre c/disco', reps: '8' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Retropulsión c/barra (vuelta lenta)', reps: '6' },
        { name: 'Pullover + press + apertura en fit', reps: '5' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Vuelo lat iso + vuelo front c/mancuerna', reps: '8+7' },
        { name: '½ giro barra punta', reps: '8' },
        { name: 'Extensiones pp suspendido', reps: '6' },
        { name: 'Rueda 3 direcciones elevado', reps: '9' },
        { name: 'Tusam 1pp', reps: '15"+15"' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Empuje + desplazamiento c/manc', reps: '6' },
        { name: 'Reloj pp colgado', reps: '6+5' },
        { name: 'Lumbares pp pesado', reps: '8' },
        { name: 'B.D. + vuelos post + frontal', reps: '6' },
        { name: 'Bíceps martillo suspendido en banco', reps: '10' }
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
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '(1x2)+(1x1)',
          rangeFSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '(1x2)+(1x1)',
          rangeFSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '(1x2)+(1x1)',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Antepulsión TRX', reps: '8' },
        { name: 'Lateralizaciones en fit', reps: '12' },
        { name: 'Superman invertido en fit', reps: '20"' },
        { name: 'Descenso bb diamante 8T', reps: '6' },
        { name: 'Bíceps a la frente c/barra W', reps: '10' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3x2',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Empuje + desplazamiento c/manc', reps: '6' },
        { name: 'Reloj pp colgado', reps: '6+5' },
        { name: 'Lumbares pp pesado', reps: '8' },
        { name: 'B.D. + vuelos post + frontal', reps: '6' },
        { name: 'Bíceps martillo suspendido en banco', reps: '10' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '(2x2)+(3x1)'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '(2x2)+(3x1)'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '(2x2)+(3x1)'
        }
      ],
      circuit: [
        { name: 'Vuelo lat iso + vuelo front c/mancuerna', reps: '8+7' },
        { name: '½ giro barra punta', reps: '8' },
        { name: 'Extensiones pp suspendido', reps: '6' },
        { name: 'Rueda 3 direcciones elevado', reps: '9' },
        { name: 'Tusam 1pp', reps: '15"+15"' }
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
          workingSets: '3x1',
          rangeFSets: '1x2'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x1',
          rangeFSets: '1x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x1',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Twist suspendido c/disco', reps: '12' },
        { name: 'Calambre c/disco', reps: '8' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Retropulsión c/barra (vuelta lenta)', reps: '6' },
        { name: 'Pullover + press + apertura en fit', reps: '5' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep',
          maxSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep',
          maxSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '3x2',
          rangeFSets: '1 rep',
          maxSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Antepulsión TRX', reps: '8' },
        { name: 'Lateralizaciones en fit', reps: '12' },
        { name: 'Superman invertido en fit', reps: '20"' },
        { name: 'Descenso bb diamante 8T', reps: '6' },
        { name: 'Bíceps a la frente c/barra W', reps: '10' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Empuje + desplazamiento c/manc', reps: '6' },
        { name: 'Reloj pp colgado', reps: '6+5' },
        { name: 'Lumbares pp pesado', reps: '8' },
        { name: 'B.D. + vuelos post + frontal', reps: '6' },
        { name: 'Bíceps martillo suspendido en banco', reps: '10' }
      ],
      circuitRounds: 3
    },
    // SEMANA 5
    {
      day: 1,
      week: 5,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Vuelo lat iso + vuelo front c/mancuerna', reps: '8+7' },
        { name: '½ giro barra punta', reps: '8' },
        { name: 'Extensiones pp suspendido', reps: '6' },
        { name: 'Rueda 3 direcciones elevado', reps: '9' },
        { name: 'Tusam 1pp', reps: '15"+15"' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 5,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x1'
        },
        {
          name: 'Fuerza c/impulso',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x1'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x1'
        }
      ],
      circuit: [
        { name: 'Twist suspendido c/disco', reps: '12' },
        { name: 'Calambre c/disco', reps: '8' },
        { name: 'Hell tronco c/disco', reps: '20"' },
        { name: 'Retropulsión c/barra (vuelta lenta)', reps: '6' },
        { name: 'Pullover + press + apertura en fit', reps: '5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 5,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x1'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x1'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x1'
        }
      ],
      circuit: [
        { name: 'Antepulsión TRX', reps: '8' },
        { name: 'Lateralizaciones en fit', reps: '12' },
        { name: 'Superman invertido en fit', reps: '20"' },
        { name: 'Descenso bb diamante 8T', reps: '6' },
        { name: 'Bíceps a la frente c/barra W', reps: '10' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_05.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_05.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_05.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_05.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_05.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
