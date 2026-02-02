// February 2026 routine data - extracted from FUERZA 10.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_02: MonthRoutine = {
  month: '2026_02',
  warmup: {
    exercises: [
      { name: 'Calambre 1bb atras', sets: '4+3' },
      { name: 'Avion', sets: '4+3' },
      { name: 'Mov c/barra lat', sets: '6' },
      { name: 'Giros', sets: '3+3' },
      { name: '2do Tiempo 1bb c/manc', sets: '4+3' }
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
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x3'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x3'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x3'
        }
      ],
      circuit: [
        { name: 'Vuelos con banda 1bb', reps: '8+7' },
        { name: 'B.D. c/banda', reps: '8' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Elevación pp + abduccion', reps: '4' },
        { name: 'Caminata de oso c/mancuernas', reps: '8' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3x2'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3x2'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3x2'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Oblicuos colgado', reps: '12' },
        { name: 'Arqueos bb extendidos', reps: '6' },
        { name: 'Excéntrico Tríceps declinado TRX (8T)', reps: '4' },
        { name: 'Puente lateral + giro', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Tracciones 1pp en fit', reps: '6+5' },
        { name: 'Inclinaciones c/banda', reps: '7+6' },
        { name: 'Twist c/disco + pp alternada', reps: '8' },
        { name: 'Bíceps martillo exc c/manc 1bb (8T)', reps: '5+4' }
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
          workingSets: '2x3'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x3'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Oblicuos colgado', reps: '12' },
        { name: 'Arqueos bb extendidos', reps: '6' },
        { name: 'Excéntrico Tríceps declinado TRX (8T)', reps: '4' },
        { name: 'Puente lateral + giro', reps: '6+5' }
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
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x3',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Vuelos con banda 1bb', reps: '8+7' },
        { name: 'B.D. c/banda', reps: '8' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Elevación pp + abduccion', reps: '4' },
        { name: 'Caminata de oso c/mancuernas', reps: '8' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Tracciones 1pp en fit', reps: '6+5' },
        { name: 'Inclinaciones c/banda', reps: '7+6' },
        { name: 'Twist c/disco + pp alternada', reps: '8' },
        { name: 'Bíceps martillo exc c/manc 1bb (8T)', reps: '5+4' }
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
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x3',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Tracciones 1pp en fit', reps: '6+5' },
        { name: 'Inclinaciones c/banda', reps: '7+6' },
        { name: 'Twist c/disco + pp alternada', reps: '8' },
        { name: 'Bíceps martillo exc c/manc 1bb (8T)', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x3'
        }
      ],
      circuit: [
        { name: 'Elevaciones desde escapulas colgado', reps: '6' },
        { name: 'Puente frontal 2 apoyos codo rodilla', reps: '6+5' },
        { name: 'Buenos días c/barra 1pp', reps: '5+4' },
        { name: 'Extensión tríceps TRX', reps: '6' },
        { name: 'Bisagras cruzadas', reps: '9' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Vuelos con banda 1bb', reps: '8+7' },
        { name: 'B.D. c/banda', reps: '8' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Elevación pp + abduccion', reps: '4' },
        { name: 'Caminata de oso c/mancuernas', reps: '8' }
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
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4x2'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4x2'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4x2'
        }
      ],
      circuit: [
        { name: 'Elevaciones desde escapulas colgado', reps: '6' },
        { name: 'Puente frontal 2 apoyos codo rodilla', reps: '6+5' },
        { name: 'Buenos días c/barra 1pp', reps: '5+4' },
        { name: 'Extensión tríceps TRX', reps: '6' },
        { name: 'Bisagras cruzadas', reps: '9' }
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
          workingSets: '2x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2',
          rangeFSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2x2',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Tracciones 1pp en fit', reps: '6+5' },
        { name: 'Inclinaciones c/banda', reps: '7+6' },
        { name: 'Twist c/disco + pp alternada', reps: '8' },
        { name: 'Bíceps martillo exc c/manc 1bb (8T)', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4 reps'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4 reps'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4 reps'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Oblicuos colgado', reps: '12' },
        { name: 'Arqueos bb extendidos', reps: '6' },
        { name: 'Excéntrico Tríceps declinado TRX (8T)', reps: '4' },
        { name: 'Puente lateral + giro', reps: '6+5' }
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
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Vuelos con banda 1bb', reps: '8+7' },
        { name: 'B.D. c/banda', reps: '8' },
        { name: 'Descenso en plancha', reps: '5' },
        { name: 'Elevación pp + abduccion', reps: '4' },
        { name: 'Caminata de oso c/mancuernas', reps: '8' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 5,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '3 reps', percentage65: '2 reps', percentage75: '1 rep' },
          workingSets: '1 rep'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '3 reps', percentage65: '2 reps', percentage75: '1 rep' },
          workingSets: '1 rep'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '3 reps', percentage65: '2 reps', percentage75: '1 rep' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Oblicuos colgado', reps: '12' },
        { name: 'Arqueos bb extendidos', reps: '6' },
        { name: 'Excéntrico Tríceps declinado TRX (8T)', reps: '4' },
        { name: 'Puente lateral + giro', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 5,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '2 reps', percentage65: '2 reps', percentage75: '2 reps' },
          workingSets: ''
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '2 reps', percentage65: '2 reps', percentage75: '2 reps' },
          workingSets: ''
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '2 reps', percentage65: '2 reps', percentage75: '2 reps' },
          workingSets: ''
        }
      ],
      circuit: [
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Tracciones 1pp en fit', reps: '6+5' },
        { name: 'Inclinaciones c/banda', reps: '7+6' },
        { name: 'Twist c/disco + pp alternada', reps: '8' },
        { name: 'Bíceps martillo exc c/manc 1bb (8T)', reps: '5+4' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_02.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_02.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_02.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_02.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_02.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
